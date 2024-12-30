import {
  AfterViewInit,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
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
import { Subject, takeUntil } from 'rxjs';

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
export default class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
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

  protected selectedDate = signal(new Date());
  protected calendarApi: CalendarApi | null = null;
  private rememberedDates = signal<{ [key: string]: boolean; }>({});
  protected eventList = signal<EventListItem[]>([]);

  private destroy$ = new Subject<void>();
  protected debouncedSetYear = debounce((year: string) => this.updateYear(year), 300);

  ngOnInit(): void {
    this.adminLayoutService.breadcrumbs.set('Dashboard');
    this.loadEvents();
  }

  ngAfterViewInit(): void {
    this.calendarApi = this.eventCalendarComponent?.fullCalendarComponent?.getApi() ?? null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  monthFilter = computed(() => this.selectedDate().getMonth());
  yearFilter = computed(() => this.selectedDate().getFullYear());

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
    this.updateDate(subMonths(this.selectedDate(), 1));
  }

  navigateToNextMonth(): void {
    this.updateDate(addMonths(this.selectedDate(), 1));
  }

  updateMonth(option: ComboboxOption): void {
    const monthIndex = parseInt(option.value, 10);
    if (monthIndex >= 0 && monthIndex <= 11) {
      this.updateDate(setMonth(this.selectedDate(), monthIndex));
    }
  }

  updateYear(year: string): void {
    if (/^\d{4}$/.test(year)) {
      this.updateDate(setYear(this.selectedDate(), parseInt(year, 10)));
    }
  }

  formatMonth(date: Date): string {
    return format(date, 'MMMM');
  }

  private updateDate(newDate: Date): void {
    this.selectedDate.set(newDate);
    this.calendarApi?.gotoDate(newDate);
    this.loadEvents();
  }

  private shouldFetchData(month: number, year: number): boolean {
    return !this.rememberedDates()[`${month}_${year}`];
  }

  private loadEvents(): void {
    const monthFilter = this.monthFilter() + 1;
    const yearFilter = this.yearFilter();

    if (this.shouldFetchData(monthFilter, yearFilter)) {
      this.eventService.getEventsByMonthAndYear({
        month: monthFilter,
        year: yearFilter,
      }).pipe(takeUntil(this.destroy$)).subscribe(events => {
        this.eventList.update(previousEvents => [...previousEvents, ...events]);
      });

      this.rememberedDates.update(rememberedDates => {
        rememberedDates[`${monthFilter}_${yearFilter}`] = true;
        return rememberedDates;
      });
    }
  }
}
