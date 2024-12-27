import { Component, inject, OnInit } from '@angular/core';
import CardModule from '@app/core/components/atoms/card/card.module';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'create-event.component.html',
  imports: [
    CardModule,
  ],
})
export default class CreateEventComponent implements OnInit {
  protected adminLayoutService = inject(AdminLayoutService);

  ngOnInit(): void {
    (async () => {
      this.adminLayoutService.breadcrumbs.set('Events > Create');
    })();
  }
}
