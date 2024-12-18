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

  _selectedDate: Date = new Date();
  _eventCalendarApi?: CalendarApi;

  ngAfterViewInit(): void {
    this._eventCalendarApi = this.eventCalendarComponent?.fullCalendarComponent?.getApi();
  }

  set selectedDate(date: Date) {
    this._selectedDate = date;
    console.log(this.selectedDate);
  }

  showPreviousMonth() {
    this._selectedDate = subMonths(this._selectedDate, 1);
    this._eventCalendarApi?.gotoDate(this._selectedDate);
  };

  showNextMonth() {
    this._selectedDate = addMonths(this._selectedDate, 1);
    this._eventCalendarApi?.gotoDate(this._selectedDate);
  }

  setMonth(option: ComboboxOption) {
    const parsedValue = parseInt(option.value);

    if (parsedValue >= 0 && parsedValue <= 11) {
      this._selectedDate = setMonth(this._selectedDate, parsedValue);
      this._eventCalendarApi?.gotoDate(this._selectedDate);
    }
  }

  setYear(year: string) {
    _.debounce(() => {
      if (/^\d{4}$/.test(year)) {
        this._selectedDate = setYear(this._selectedDate, parseInt(year));
        this._eventCalendarApi?.gotoDate(this._selectedDate);
      }
    }, 300)();
  }
}

export default DashboardComponent;
