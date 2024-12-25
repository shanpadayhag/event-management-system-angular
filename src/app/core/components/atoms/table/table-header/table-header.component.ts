import { Component } from '@angular/core';

@Component({
  selector: '[app-table-header]',
  standalone: false,
  host: { 'class': '[&_tr]:border-b' },
  templateUrl: 'table-header.component.html'
})
export default class TableHeaderComponent { }
