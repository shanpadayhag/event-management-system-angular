import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  standalone: false,
  templateUrl: 'labeled-input.component.html',
  host: { class: 'h-auto' }
})
export default class LabeledInputComponent {
  @Input() value = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() optional = false;
  @Output() textChangeEvent = new EventEmitter<string>();
}
