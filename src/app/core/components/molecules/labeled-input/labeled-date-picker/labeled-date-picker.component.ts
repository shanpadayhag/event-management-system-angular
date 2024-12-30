import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-date-picker',
  standalone: false,
  templateUrl: 'labeled-date-picker.component.html',
})
export default class LabeledDatePickerComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() optional = false;
}
