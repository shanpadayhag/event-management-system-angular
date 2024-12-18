import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'event-calendar',
  encapsulation: ViewEncapsulation.None,
  imports: [FullCalendarModule],
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'] // corrected from styleUrl
})
export class EventCalendarComponent {
  @ViewChild(FullCalendarComponent) fullCalendarComponent?: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: false,
  };
}
