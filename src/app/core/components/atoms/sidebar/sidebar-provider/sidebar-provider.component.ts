import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/core/components/atoms/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-provider',
  standalone: false,
  templateUrl: 'sidebar-provider.component.html',
})
export default class SidebarProviderComponent {
  public sidebarService = inject(SidebarService);
}
