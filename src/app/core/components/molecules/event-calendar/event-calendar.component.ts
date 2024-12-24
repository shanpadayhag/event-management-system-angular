import { Component, Input, OnChanges, SimpleChanges, signal, ViewChild, ViewEncapsulation, WritableSignal, inject, Output, EventEmitter } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, MoreLinkArg } from '@fullcalendar/core/index.js';
import DateService from '@app/core/services/date.service';

export type Event = {
  title: string;
  start: Date;
  end: Date;
  color?: string;
};

@Component({
  selector: 'app-event-calendar',
  standalone: false,
  templateUrl: 'event-calendar.component.html',
  styleUrl: 'event-calendar.component.css',
  encapsulation: ViewEncapsulation.None,
})
export default class EventCalendarComponent implements OnChanges {
  @ViewChild(FullCalendarComponent) fullCalendarComponent?: FullCalendarComponent;
  @Input() events: Event[] = [];
  @Output() moreLinkClick = new EventEmitter<MoreLinkArg>();

  protected dateService = inject(DateService);
  protected calendarOptions: WritableSignal<CalendarOptions> = signal({
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: false,
    dayMaxEvents: 1,
    moreLinkContent: (args) => {
      return `+${args.num} more`;
    },
    moreLinkClick: (args) => {
      args.jsEvent.preventDefault();
      this.moreLinkClick.emit(args);
    }
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      this.updateCalendarEvents();
    }
  }

  private updateCalendarEvents(): void {
    this.calendarOptions.update(options => {
      options.events = this.events;
      return options;
    });
  }
}
