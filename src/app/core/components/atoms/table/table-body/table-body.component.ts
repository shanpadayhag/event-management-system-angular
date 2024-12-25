import { Component } from '@angular/core';

@Component({
  selector: 'app-table-body',
  standalone: false,
  host: { 'class': '[&_tr:last-child]:border-0' },
  templateUrl: 'table-body.component.html'
})
export default class TableBodyComponent { }
