import { Component, HostBinding, inject } from '@angular/core';
import { SidebarService } from '@app/core/components/atoms/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-inset',
  standalone: false,
  templateUrl: 'sidebar-inset.component.html',
})
export default class SidebarInsertComponent {
  @HostBinding('class.flex-1') flex1 = true;
  @HostBinding('class.items-stretch') itemsStretch = true;

  public sidebarService = inject(SidebarService);
}
