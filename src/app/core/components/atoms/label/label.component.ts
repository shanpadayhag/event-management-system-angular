import { Component, computed, inject, Input, signal } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: '[app-label]',
  standalone: false,
  templateUrl: 'label.component.html',
  host: { '[class]': 'mergedClasses()' }
})
export default class LabelComponent {
  @Input() set className(value: string) {
    this._className.set(value);
  }

  private _tailwindService = inject(TailwindService);
  private _defaultClasses = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

  private _className = signal('');

  mergedClasses = computed(() => {
    return this._tailwindService.merge(this._defaultClasses, this._className());
  });
}
