import { NgFor } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import CardModule from '@app/core/components/atoms/card/card.module';
import TableModule from '@app/core/components/atoms/table/table.module';
import DateService from '@app/core/services/date.service';
import EventService from '@app/modules/event/event.service';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'event-list.component.html',
  imports: [
    NgFor,
    ButtonModule,
    CardModule,
    TableModule,
  ],
})
export default class EventListComponent implements OnInit {
  protected adminLayoutService = inject(AdminLayoutService);
  protected eventService = inject(EventService);
  protected dateService = inject(DateService);
  protected eventList: WritableSignal<EventListItem[]> = signal([]);
  protected dateFilter = signal(new Date());

  ngOnInit(): void {
    (async () => {
      this.adminLayoutService.breadcrumbs.set('Events');
    })();

    (async () => {
      this.eventService.fetchEventByMonthAndYear({
        month: this.dateFilter().getMonth() + 1,
        year: this.dateFilter().getFullYear(),
      }).subscribe(this.eventList.set);
    })();
  }
}
