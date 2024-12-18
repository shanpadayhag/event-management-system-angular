import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, LayoutDashboard, Command, Sidebar } from 'lucide-angular';

@Component({
  templateUrl: './admin-layout.component.html',
  imports: [RouterModule, LucideAngularModule]
})
class AdminLayoutComponent {
  readonly LayoutDashboard = LayoutDashboard;
  readonly Command = Command;
  readonly Sidebar = Sidebar;

  sidebarState = {
    collapsible: "",
  };

  toggleSidebarTrigger() {
    if (this.sidebarState.collapsible === "")
      this.sidebarState = {
        collapsible: "offcanvas"
      };
    else
      this.sidebarState = {
        collapsible: ""
      };
  }
}

export default AdminLayoutComponent;
