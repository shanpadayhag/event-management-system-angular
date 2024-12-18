import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EventCalendarComponent } from '../../../components/molecules/event-calendar/event-calendar.component';
import { ButtonComponent } from '../../../components/atoms/button/button.component';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { CalendarApi } from '@fullcalendar/core/index.js';
import { ComboboxComponent, ComboboxOption } from '../../../components/molecules/combobox/combobox.component';
import { InputComponent } from '../../../components/atoms/input/input.component';
import { setMonth, addMonths, subMonths, setYear, format } from 'date-fns';
import _ from 'lodash';

@Component({
  templateUrl: './dashboard.component.html',
  imports: [
    LucideAngularModule,
    EventCalendarComponent,
    ButtonComponent,
    ComboboxComponent,
    InputComponent,
  ]
})
class DashboardComponent implements AfterViewInit {
  @ViewChild(EventCalendarComponent) eventCalendarComponent?: EventCalendarComponent;

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly format = format;

  selectedDate: Date = new Date();
  eventCalendarApi?: CalendarApi;

  ngAfterViewInit(): void {
    this.eventCalendarApi = this.eventCalendarComponent?.fullCalendarComponent?.getApi();
  }

  showPreviousMonth() {
    this.selectedDate = subMonths(this.selectedDate, 1);
    this.eventCalendarApi?.gotoDate(this.selectedDate);
  };

  showNextMonth() {
    this.selectedDate = addMonths(this.selectedDate, 1);
    this.eventCalendarApi?.gotoDate(this.selectedDate);
  }

  setMonth(option: ComboboxOption<{ value: number; }>) {
    if (option.data?.value) {
      this.selectedDate = setMonth(this.selectedDate, option.data.value);
      this.eventCalendarApi?.gotoDate(this.selectedDate);
    }
  }

  setYear(year: string) {
    _.debounce(() => {
      if (/^\d{4}$/.test(year)) {
        this.selectedDate = setYear(this.selectedDate, parseInt(year));
        this.eventCalendarApi?.gotoDate(this.selectedDate);
      }
    }, 300)();
  }
}

export default DashboardComponent;
