import { Component, Input } from '@angular/core';
import { Calendar } from 'lucide-angular';

@Component({
  selector: 'app-date-picker',
  standalone: false,
  templateUrl: 'date-picker.component.html',
  host: { class: 'px-3' }
})
export default class DatePickerComponent {
  protected readonly Calendar = Calendar;

  @Input() placeholder = '';
}
