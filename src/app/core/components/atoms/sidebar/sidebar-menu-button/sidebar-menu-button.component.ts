import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-button',
  standalone: false,
  templateUrl: 'sidebar-menu-button.component.html'
})
export default class SidebarMenuButtonComponent {
  @Input() href = '#';
}
