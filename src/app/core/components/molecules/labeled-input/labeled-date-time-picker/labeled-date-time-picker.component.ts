import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-labeled-date-time-picker',
  standalone: false,
  templateUrl: 'labeled-date-time-picker.component.html',
  host: { class: 'h-auto' }
})
export default class LabeledDateTimePickerComponent {
  @Input() value?: Date | null;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() optional = false;
  @Output() changeDateEvent = new EventEmitter<Date>();
}
