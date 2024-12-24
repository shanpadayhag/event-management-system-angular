import { Component, inject, OnInit } from '@angular/core';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'event-list.component.html',
})
export default class EventListComponent implements OnInit {
  protected adminLayoutService = inject(AdminLayoutService);

  ngOnInit(): void {
    (async () => {
      this.adminLayoutService.breadcrumbs.set('Events');
    })();
  }
}
