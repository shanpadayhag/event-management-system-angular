import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cn } from '../../../lib/tailwind/utils';

@Component({
  selector: 'c-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() className: string = '';

  _className = '';

  ngOnInit(): void {
    this._className = cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', this.className);
  }

  _onChangeValue(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
