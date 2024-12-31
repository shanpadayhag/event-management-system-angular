import { Component } from '@angular/core';

@Component({
  selector: '[app-dialog-overlay]',
  standalone: false,
  template: ``,
  host: {
    class: 'fixed inset-0 z-50 bg-black/80',
  }
})
export default class DialogOverlayComponent {
}
