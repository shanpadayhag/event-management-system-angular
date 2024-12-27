import { Component, computed, inject, Input, Signal, signal, WritableSignal } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: '[app-table-cell]',
  standalone: false,
  host: { '[class]': 'mergedClass()' },
  templateUrl: 'table-cell.component.html',
})
export default class TableCellComponent {
  @Input() set className(value: string) {
    this.classNameSignal.set(value);
  }
  private classNameSignal: WritableSignal<string> = signal('');

  private tailwindService = inject(TailwindService);
  private defaultClass = 'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]';

  mergedClass = computed(() => {
    return this.tailwindService.merge(this.defaultClass, this.classNameSignal());
  });
}
