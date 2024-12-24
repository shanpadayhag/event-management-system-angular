import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/core/components/atoms/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: 'sidebar.component.html',
})
export default class SidebarComponent {
  readonly sidebarService = inject(SidebarService);
}
