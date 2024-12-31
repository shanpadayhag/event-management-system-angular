import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import DateService from '@app/core/services/date.service';
import { Calendar } from 'lucide-angular';

@Component({
  selector: 'app-date-time-picker',
  standalone: false,
  templateUrl: 'date-time-picker.component.html',
  host: { class: 'px-3' }
})
export default class DateTimePickerComponent {
  protected readonly Calendar = Calendar;

  @Input() value?: Date | null;
  @Input() placeholder = '';
  @Output() changeDateEvent = new EventEmitter<Date>();

  protected dateService = inject(DateService);

  onClickHandler(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;

    const handleDateChange = () => {
      this.changeDateEvent.emit(new Date(inputElement.value));
      inputElement.removeEventListener('change', handleDateChange);
    };

    inputElement.addEventListener('change', handleDateChange);
  }
}
