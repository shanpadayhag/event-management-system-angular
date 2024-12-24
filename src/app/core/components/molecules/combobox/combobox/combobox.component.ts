import { ChangeDetectionStrategy, Component, computed, effect, EventEmitter, inject, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import TailwindService from '@app/core/services/tailwind.service';
import { Check, ChevronsUpDown, Search } from 'lucide-angular';

export type ComboboxOption<Data = any> = {
  value: string;
  label: string;
  data?: Data;
};

@Component({
  selector: 'app-combobox',
  standalone: false,
  templateUrl: 'combobox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent implements OnInit {
  @Input() options: ComboboxOption[] = [];
  @Input() selectedOption?: ComboboxOption;
  @Input() placeholder: string = "";
  @Input() searchPlaceholder: string = '';
  @Input() emptyOptionsMessage: string = '';
  @Input() class: string = '';
  @Output() selectOption = new EventEmitter<ComboboxOption>();

  protected readonly Icons = {
    ChevronsUpDown,
    Search,
    Check,
  };

  protected tailwindService = inject(TailwindService);
  protected isOpen = signal(false);
  protected filteredOptions: WritableSignal<ComboboxOption[]> = signal([]);
  protected hoveredOption = signal<ComboboxOption | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.isOpen() && this.selectedOption)
        this.hoveredOption.set(this.selectedOption);
    });
  }

  ngOnInit(): void {
    this.filteredOptions.set(this.options);
  }

  buttonClassName = () => {
    return this.tailwindService.merge(
      "w-full justify-between",
      !this.selectedOption && 'text-muted-foreground',
      this.class
    );
  };

  protected toggleDropdown(): void {
    this.isOpen.update(isOpen => !isOpen);
  }

  protected selectValue(option: ComboboxOption): void {
    this.selectOption.emit(option);
    this.isOpen.set(false);
  }

  protected onSearchInput(query: string): void {
    this.options.filter(option => option.label.toLowerCase().includes(query));
  }

  protected trackByValue(_: number, option: ComboboxOption): string {
    return option.value;
  }
}
