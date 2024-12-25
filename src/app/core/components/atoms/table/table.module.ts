import { NgModule } from '@angular/core';
import TableBodyComponent from '@app/core/components/atoms/table/table-body/table-body.component';
import TableCellComponent from '@app/core/components/atoms/table/table-cell/table-cell.component';
import TableHeadComponent from '@app/core/components/atoms/table/table-head/table-head.component';
import TableHeaderComponent from '@app/core/components/atoms/table/table-header/table-header.component';
import TableRowComponent from '@app/core/components/atoms/table/table-row/table-row.component';
import TableComponent from '@app/core/components/atoms/table/table/table.component';

@NgModule({
  declarations: [
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableCellComponent,
  ],
  exports: [
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableCellComponent,
  ]
})
export default class TableModule { }
