import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarRange, LayoutDashboard, LucideAngularModule } from 'lucide-angular';
import SidebarModule from '@app/core/components/atoms/sidebar/sidebar.module';
import AdminLayoutHeaderComponent from '@app/modules/layout/admin/components/organisms/admin-layout-header/admin-layout-header.component';
import AdminLayoutService from '@app/modules/layout/admin/admin-layout.service';

@Component({
  templateUrl: 'admin-layout.component.html',
  providers: [AdminLayoutService],
  imports: [
    RouterModule,
    LucideAngularModule,
    SidebarModule,
    AdminLayoutHeaderComponent,
  ],
})
export default class AdminLayoutComponent {
  readonly LayoutDashboard = LayoutDashboard;
  readonly CalendarRange = CalendarRange;
}
