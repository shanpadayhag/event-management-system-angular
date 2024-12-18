import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CardComponent } from '../../atoms/card/card.component';
import { Check, ChevronsUpDown, LucideAngularModule, Search } from 'lucide-angular';
import { cn } from '../../../lib/tailwind/utils';
import { NgFor, NgIf } from '@angular/common';

export type ComboboxOption<Data = any> = {
  value: string;
  label: string;
} & (Data extends undefined
  ? { data?: undefined; }
  : { data?: Data; });

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  imports: [
    NgIf,
    NgFor,
    LucideAngularModule,
    ButtonComponent,
    CardComponent,
  ],
})
export class ComboboxComponent implements OnInit {
  @Input() options: ComboboxOption[] = [];
  @Input() selectedOption?: ComboboxOption;
  @Input() placeholder: string = "";
  @Input() searchPlaceholder: string = '';
  @Input() noOptionsMessage: string = '';
  @Input() className: string = "";

  readonly ChevronsUpDown = ChevronsUpDown;
  readonly Search = Search;
  readonly Check = Check;

  _open = false;
  _className = "";
  _options: ComboboxOption[] = [];
  _hoveredOption?: ComboboxOption;

  ngOnInit() {
    this._className = cn("w-full justify-between text-primary-foreground", !this.selectedOption && 'text-muted-foreground', this.className);
    this._options = this.options;
  }

  toggleButton() {
    this._open = !this._open;

    if (this.selectedOption)
      this._hoveredOption = this.selectedOption;
  }

  _selectOption(option: ComboboxOption) {
    this.selectedOption = this._hoveredOption = option;
    this._open = false;
  }
}
