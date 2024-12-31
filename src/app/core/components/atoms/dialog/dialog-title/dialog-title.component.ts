import { Component } from '@angular/core';

@Component({
  selector: '[app-dialog-title]',
  standalone: false,
  templateUrl: 'dialog-title.component.html',
  host: { class: 'text-lg font-semibold leading-none tracking-tight' }
})
export default class DialogTitleComponent { }
