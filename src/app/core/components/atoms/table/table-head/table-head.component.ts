import { Component } from '@angular/core';

@Component({
  selector: '[app-table-head]',
  standalone: false,
  host: { 'class': 'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]' },
  templateUrl: 'table-head.component.html'
})
export default class TableHeadComponent { }
