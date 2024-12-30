import { Component, computed, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: '[app-input]',
  standalone: false,
  template: ``,
  host: {
    '[class]': 'mergedClass()',
    '[attr.placeholder]': 'placeholder',
    '[attr.value]': 'value',
    '(change)': 'onInputChange($event)'
  }
})
export default class InputComponent {
  @Input() value: string = '';
  @Input() set className(value: string) {
    this._className.set(value);
  };
  @Input() placeholder: string = '';
  @Output() textChangeEvent = new EventEmitter<string>();
  private _className = signal('');

  private _tailwindService = inject(TailwindService);
  private _defaultClass = 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50';

  mergedClass = computed(() => {
    return this._tailwindService.merge(this._defaultClass, this._className());
  });

  onInputChange = (event: Event) => {
    this.textChangeEvent.emit((event.target as HTMLInputElement).value);
  };
}
