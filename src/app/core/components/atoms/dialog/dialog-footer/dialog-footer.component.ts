import { Component } from '@angular/core';

@Component({
  selector: '[app-dialog-footer]',
  standalone: false,
  templateUrl: 'dialog-footer.component.html',
  host: { class: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2' }
})
export default class DialogFooterComponent { }
