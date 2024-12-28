import { Component, inject, OnInit } from '@angular/core';
import CardModule from '@app/core/components/atoms/card/card.module';
import ToastService from '@app/core/services/toast.service';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'create-event.component.html',
  imports: [
    CardModule,
  ],
})
export default class CreateEventComponent implements OnInit {
  protected adminLayoutService = inject(AdminLayoutService);
  protected toastService = inject(ToastService);

  ngOnInit(): void {
    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 1',
        description: 'What a super nice one!',
      });
    }, 500);

    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 2',
        description: 'What a super nice one!',
      });
    }, 1000);

    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 3',
        description: 'What a super nice one!',
      });
    }, 1500);

    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 4',
        description: 'What a super nice one!',
      });
    }, 2000);

    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 5',
        description: 'What a super nice one!',
      });
    }, 2500);

    setTimeout(() => {
      this.toastService.addToast({
        title: 'Success 6',
        description: 'What a super nice one!',
      });
    }, 3000);

    (async () => {
      this.adminLayoutService.breadcrumbs.set('Events > Create');
    })();
  }
}
