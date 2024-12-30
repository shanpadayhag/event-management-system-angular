import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Calendar } from 'lucide-angular';

@Component({
  selector: 'app-date-time-picker',
  standalone: false,
  templateUrl: 'date-time-picker.component.html',
  host: { class: 'px-3' }
})
export default class DateTimePickerComponent {
  protected readonly Calendar = Calendar;

  @Input() placeholder = '';
  @Output() changeDateEvent = new EventEmitter<Date>();

  onClickHandler(event: MouseEvent) {
    const inputElement = event.target as HTMLInputElement;

    const handleDateChange = () => {
      this.changeDateEvent.emit(new Date(inputElement.value));
      inputElement.removeEventListener('change', handleDateChange);
    };

    inputElement.addEventListener('change', handleDateChange);
  }
}
