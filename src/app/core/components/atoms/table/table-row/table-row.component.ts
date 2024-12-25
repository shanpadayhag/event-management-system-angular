import { Component } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  standalone: false,
  host: { 'class': 'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted' },
  templateUrl: 'table-row.component.html'
})
export default class TableRowComponent { }
