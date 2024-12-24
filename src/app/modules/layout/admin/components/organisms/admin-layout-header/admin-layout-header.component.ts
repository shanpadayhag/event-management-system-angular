import { Component, inject } from '@angular/core';
import SeparatorModule from '@app/core/components/atoms/separator/separator.module';
import { SidebarService } from '@app/core/components/atoms/sidebar/sidebar.service';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';
import { LucideAngularModule, Sidebar } from 'lucide-angular';

@Component({
  selector: 'admin-layout-header',
  templateUrl: 'admin-layout-header.component.html',
  imports: [
    LucideAngularModule,
    SeparatorModule,
  ]
})
export default class AdminLayoutHeaderComponent {
  readonly Sidebar = Sidebar;
  protected sidebarService = inject(SidebarService);
  protected adminLayoutService = inject(AdminLayoutService);
}
