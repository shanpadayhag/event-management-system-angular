import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  standalone: false,
  templateUrl: 'separator.component.html',
})
export default class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() class = '';
}
