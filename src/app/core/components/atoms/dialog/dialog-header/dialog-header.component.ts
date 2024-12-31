import { Component } from '@angular/core';

@Component({
  selector: '[app-dialog-header]',
  standalone: false,
  templateUrl: 'dialog-header.component.html',
  host: { class: 'flex flex-col space-y-1.5 text-center sm:text-left' }
})
export default class DialogHeaderComponent { }
