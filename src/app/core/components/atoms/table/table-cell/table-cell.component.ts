import { Component } from '@angular/core';

@Component({
  selector: '[app-table-cell]',
  standalone: false,
  host: { class: 'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]' },
  templateUrl: 'table-cell.component.html'
})
export default class TableCellComponent { }
