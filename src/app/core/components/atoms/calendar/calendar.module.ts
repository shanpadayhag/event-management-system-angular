import { NgModule } from '@angular/core';
import CalendarComponent from '@app/core/components/atoms/calendar/calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export default class CalendarModule { }
