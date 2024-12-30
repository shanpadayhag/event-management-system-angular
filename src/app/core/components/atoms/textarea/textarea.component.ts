import { Component, computed, inject, Input, signal } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: '[app-textarea]',
  standalone: false,
  template: ``,
  host: { '[class]': '_mergedClass()' },
})
export default class TextareaComponent {
  @Input() set className(value: string) {
    this._className.set(value);
  }

  private _tailwindService = inject(TailwindService);
  private _defaultClasses = 'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';
  private _className = signal('');

  private _mergedClass = computed(() => {
    return this._tailwindService.merge(this._defaultClasses, this._className());
  });
}
