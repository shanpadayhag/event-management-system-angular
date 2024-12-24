import { NgModule } from '@angular/core';
import EventCalendarComponent from '@app/core/components/molecules/event-calendar/event-calendar.component';
import { FullCalendarModule as PrimitiveFullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [EventCalendarComponent],
  imports: [PrimitiveFullCalendarModule],
  exports: [EventCalendarComponent]
})
export default class EventCalendarModule { }
