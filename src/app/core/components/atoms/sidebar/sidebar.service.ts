import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable()
export class SidebarService {
  SIDEBAR_WIDTH = "16rem";
  SIDEBAR_WIDTH_MOBILE = "18rem";
  SIDEBAR_WIDTH_ICON = "3rem";

  public variant = signal('inset');
  public state: WritableSignal<'expanded' | 'collapsed'> = signal('expanded');
  public collapsible: WritableSignal<'' | 'icon'> = signal('');

  toggleSidebar() {
    const collapsible = this.collapsible();
    const state = this.state();

    if (collapsible === 'icon') this.collapsible.set('');
    else this.collapsible.set('icon');

    if (state === 'expanded') this.state.set('collapsed');
    else this.state.set('expanded');
  };
}
