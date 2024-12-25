import { Component } from '@angular/core';

@Component({
  selector: '[app-table]',
  standalone: false,
  host: { 'class': 'w-full caption-bottom text-sm' },
  templateUrl: 'table.component.html'
})
export default class TableComponent { }
