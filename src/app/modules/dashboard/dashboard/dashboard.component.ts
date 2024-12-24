import { AfterViewInit, Component, inject, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import InputModule from '@app/core/components/atoms/input/input.module';
import ComboboxModule from '@app/core/components/molecules/combobox/combobox.module';
import { ComboboxOption } from '@app/core/components/molecules/combobox/combobox/combobox.component';
import {
  addMonths,
  format,
  getMonth,
  setMonth,
  setYear,
  subMonths,
} from 'date-fns';
import {
  ChevronLeft,
  ChevronRight,
  LucideAngularModule,
} from 'lucide-angular';
import { debounce } from 'lodash';
import EventCalendarModule from '@app/core/components/molecules/event-calendar/event-calendar.module';
import EventCalendarComponent from '@app/core/components/molecules/event-calendar/event-calendar.component';
import { CalendarApi } from '@fullcalendar/core/index.js';
import EventService from '@app/modules/event/event.service';
import EventListItem from '@app/modules/event/models/event-list-item.model';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  imports: [
    LucideAngularModule,
    ButtonModule,
    ComboboxModule,
    InputModule,
    EventCalendarModule,
  ],
})
export default class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(EventCalendarComponent) eventCalendarComponent?: EventCalendarComponent;

  readonly chevronLeft = ChevronLeft;
  readonly chevronRight = ChevronRight;
  readonly monthOptions: ComboboxOption[] = [
    { value: '0', label: 'January' },
    { value: '1', label: 'February' },
    { value: '2', label: 'March' },
    { value: '3', label: 'April' },
    { value: '4', label: 'May' },
    { value: '5', label: 'June' },
    { value: '6', label: 'July' },
    { value: '7', label: 'August' },
    { value: '8', label: 'September' },
    { value: '9', label: 'October' },
    { value: '10', label: 'November' },
    { value: '11', label: 'December' },
  ];

  private eventService = inject(EventService);
  private adminLayoutService = inject(AdminLayoutService);

  protected selectedDate: WritableSignal<Date> = signal(new Date());
  protected debouncedSetYear = debounce(this.updateYear, 300);
  protected eventCalendarApi?: WritableSignal<CalendarApi | null> = signal(null);
  protected eventList: WritableSignal<EventListItem[]> = signal([]);

  ngOnInit(): void {
    (async () => {
      this.adminLayoutService.breadcrumbs.set('Dashboard');
    })();

    (async () => {
      const response = this.eventService.fetchEventByMonthAndYear({
        month: this.selectedDate().getMonth() + 1,
        year: this.selectedDate().getFullYear(),
      });

      response.subscribe(value => this.eventList.update(events => [
        ...events,
        ...value,
      ]));
    })();
  }

  ngAfterViewInit(): void {
    this.eventCalendarApi?.set(this.eventCalendarComponent?.fullCalendarComponent?.getApi() ?? null);
  }

  get selectedMonthOption(): ComboboxOption {
    const month = getMonth(this.selectedDate());
    return (
      this.monthOptions.find((option) => option.value === month.toString()) ??
      this.monthOptions[0]
    );
  }

  get selectedYear(): string {
    return this.selectedDate().getFullYear().toString();
  }

  navigateToPreviousMonth(): void {
    this.selectedDate.update((date) => {
      const newDate = subMonths(date, 1);
      this.eventCalendarApi?.()?.gotoDate(newDate);
      return newDate;
    });
  }

  navigateToNextMonth(): void {
    this.selectedDate.update((date) => {
      const newDate = addMonths(date, 1);
      this.eventCalendarApi?.()?.gotoDate(newDate);
      return newDate;
    });
  }

  updateMonth(option: ComboboxOption): void {
    const monthIndex = parseInt(option.value, 10);
    if (monthIndex >= 0 && monthIndex <= 11) {
      this.selectedDate.update((date) => {
        const newDate = setMonth(date, monthIndex);
        this.eventCalendarApi?.()?.gotoDate(newDate);
        return newDate;
      });
    }
  }

  updateYear(year: string): void {
    if (/^\d{4}$/.test(year)) {
      this.selectedDate.update((date) => {
        const newDate = setYear(date, parseInt(year, 10));
        this.eventCalendarApi?.()?.gotoDate(newDate);
        return newDate;
      });
    }
  }

  protected formatMonth(date: Date): string {
    return format(date, 'MMMM');
  }
}
