import { Component, computed, EventEmitter, inject, Input, Output } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: 'input.component.html',
})
export default class InputComponent {
  private tailwindService = inject(TailwindService);

  @Input() value: string = '';
  @Input() class: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Output() textChangeEvent = new EventEmitter<string>();

  inputClasses = computed(() => {
    return this.tailwindService.merge(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      this.class
    );
  });

  onInputChange = (event: Event) => {
    this.textChangeEvent.emit((event.target as HTMLInputElement).value);
  };
}
