import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-textarea',
  standalone: false,
  templateUrl: 'labeled-textarea.component.html',
})
export default class LabeledTextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() optional = true;
}
