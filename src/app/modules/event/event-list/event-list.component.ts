import { NgFor } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, computed, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import CardModule from '@app/core/components/atoms/card/card.module';
import TableModule from '@app/core/components/atoms/table/table.module';
import DateService from '@app/core/services/date.service';
import EventService from '@app/modules/event/event.service';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  templateUrl: 'event-list.component.html',
  imports: [
    NgFor,
    RouterLink,
    ButtonModule,
    CardModule,
    TableModule,
  ],
})
export default class EventListComponent implements OnInit, OnDestroy {
  protected adminLayoutService = inject(AdminLayoutService);
  protected eventService = inject(EventService);
  protected dateService = inject(DateService);
  protected router = inject(Router);
  protected eventList: WritableSignal<EventListItem[]> = signal([]);
  protected dateFilter = signal(new Date());
  protected monthYear = computed(() => ({
    month: this.dateFilter().getMonth() + 1,
    year: this.dateFilter().getFullYear(),
  }));

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.adminLayoutService.breadcrumbs.set('Events');
    this.fetchEvents();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected async fetchEvents(): Promise<void> {
    this.eventService.getEventsByMonthAndYear(this.monthYear())
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.eventList.set);
  }
}
