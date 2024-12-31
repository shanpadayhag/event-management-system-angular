import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: '[app-dialog]',
  standalone: false,
  templateUrl: 'dialog.component.html'
})
export default class DialogComponent implements AfterViewInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) { }

  ngAfterViewInit() {
    const body = document.body;
    if (body) this.renderer.appendChild(body, this.element.nativeElement);
  }

  ngOnDestroy() {
    const body = document.body;
    if (body) this.renderer.removeChild(body, this.element.nativeElement);
  }
}
