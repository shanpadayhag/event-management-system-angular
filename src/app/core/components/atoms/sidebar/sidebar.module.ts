import { NgModule } from '@angular/core';
import SidebarComponent from '@app/core/components/atoms/sidebar/sidebar/sidebar.component';
import SidebarHeaderComponent from '@app/core/components/atoms/sidebar/sidebar-header/sidebar-header.component';
import SidebarMenuComponent from '@app/core/components/atoms/sidebar/sidebar-menu/sidebar-menu.component';
import SidebarContentComponent from '@app/core/components/atoms/sidebar/sidebar-content/sidebar-content.component';
import SidebarGroupLabelComponent from '@app/core/components/atoms/sidebar/sidebar-group-label/sidebar-group-label.component';
import SidebarGroupComponent from '@app/core/components/atoms/sidebar/sidebar-group/sidebar-group.component';
import SidebarInsertComponent from '@app/core/components/atoms/sidebar/sidebar-inset/sidebar-inset.component';
import SidebarMenuItemComponent from '@app/core/components/atoms/sidebar/sidebar-menu-item/sidebar-menu-item.component';
import SidebarProviderComponent from '@app/core/components/atoms/sidebar/sidebar-provider/sidebar-provider.component';
import { SidebarService } from '@app/core/components/atoms/sidebar/sidebar.service';
import SidebarMenuButtonComponent from '@app/core/components/atoms/sidebar/sidebar-menu-button/sidebar-menu-button.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    SidebarMenuButtonComponent,
    SidebarContentComponent,
    SidebarGroupComponent,
    SidebarGroupLabelComponent,
    SidebarInsertComponent,
    SidebarProviderComponent,
  ],
  imports: [RouterLink],
  providers: [SidebarService],
  exports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    SidebarMenuButtonComponent,
    SidebarContentComponent,
    SidebarGroupComponent,
    SidebarGroupLabelComponent,
    SidebarInsertComponent,
    SidebarProviderComponent,
  ]
})
export default class SidebarModule { }
