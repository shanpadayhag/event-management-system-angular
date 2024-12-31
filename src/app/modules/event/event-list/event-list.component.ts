import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, computed, signal, WritableSignal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import CardModule from '@app/core/components/atoms/card/card.module';
import DialogModule from '@app/core/components/atoms/dialog/dialog.module';
import TableModule from '@app/core/components/atoms/table/table.module';
import DateService from '@app/core/services/date.service';
import ToastService from '@app/core/services/toast.service';
import EventService from '@app/modules/event/event.service';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'event-list.component.html',
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    ButtonModule,
    CardModule,
    TableModule,
    DialogModule,
  ],
})
export default class EventListComponent implements OnInit {
  private readonly adminLayoutService = inject(AdminLayoutService);
  private readonly eventService = inject(EventService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastService = inject(ToastService);
  protected readonly dateService = inject(DateService);

  protected eventList: WritableSignal<EventListItem[]> = signal([]);
  protected dateFilter = signal(new Date());
  protected monthYear = computed(() => ({
    month: this.dateFilter().getMonth() + 1,
    year: this.dateFilter().getFullYear(),
  }));

  protected deleteConfirmationState = signal<"open" | "close">("close");
  protected selectedEventIDToDelete = signal(-1);

  ngOnInit(): void {
    this.initializeBreadcrumbs();
    this.fetchEvents();
  }

  private initializeBreadcrumbs(): void {
    this.adminLayoutService.breadcrumbs.set('Events');
  }

  protected async fetchEvents(): Promise<void> {
    this.eventService.getEventsByMonthAndYear(this.monthYear())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(this.eventList.set);
  }

  onClickDelete(id: number): void {
    this.deleteConfirmationState.set("open");
    this.selectedEventIDToDelete.set(id);
  }

  continueDelete(): void {
    this.deleteConfirmationState.set("close");

    this.eventService.deleteEvent({ id: this.selectedEventIDToDelete() })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        this.toastService.addToast({
          title: `${value.title} Deleted!`,
          description: 'You did it! The item is gone for good!'
        });

        this.fetchEvents();
        this.selectedEventIDToDelete.set(-1);
      });
  }
}
