import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import CardModule from '@app/core/components/atoms/card/card.module';
import LabeledInputModule from '@app/core/components/molecules/labeled-input/labeled-input.module';
import ToastService from '@app/core/services/toast.service';
import EventService from '@app/modules/event/event.service';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'create-event.component.html',
  imports: [
    RouterModule,
    ButtonModule,
    CardModule,
    LabeledInputModule,
  ],
})
export default class CreateEventComponent implements OnInit {
  protected router = inject(Router);
  protected adminLayoutService = inject(AdminLayoutService);
  protected toastService = inject(ToastService);
  protected eventService = inject(EventService);
  private destroyRef = inject(DestroyRef);

  protected newTitle = signal('');
  protected newEventStart = signal<Date | null>(null);
  protected newEventEnd = signal<Date | null>(null);
  protected newColor = signal('');

  ngOnInit(): void {
    (async () => {
      this.adminLayoutService.breadcrumbs.set('Events > Create');
    })();
  }

  createEvent(event: SubmitEvent) {
    event.preventDefault();

    this.eventService.storeEvent({
      title: this.newTitle(),
      start: this.newEventStart()!,
      end: this.newEventEnd()!,
      color: this.newColor(),
    }).pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.toastService.addToast({
            title: 'Yay! Event Created!',
            description: 'Your event has been successfully recorded!',
          });

          this.router.navigate(['/events']);
        },
        error: (response) => {
          let title = "Whoops, Request Didn't Go Through!";
          let description = Object.values(response.error.errors)[0] as string;

          this.toastService.addToast({
            title: title,
            description: description,
          });
        },
      });
  }
}
