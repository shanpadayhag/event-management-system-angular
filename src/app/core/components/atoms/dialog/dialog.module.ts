import { NgModule } from '@angular/core';
import DialogDescriptionComponent from '@app/core/components/atoms/dialog/dialog-description/dialog-description.component';
import DialogFooterComponent from '@app/core/components/atoms/dialog/dialog-footer/dialog-footer.component';
import DialogHeaderComponent from '@app/core/components/atoms/dialog/dialog-header/dialog-header.component';
import DialogOverlayComponent from '@app/core/components/atoms/dialog/dialog-overlay/dialog-overlay.component';
import DialogTitleComponent from '@app/core/components/atoms/dialog/dialog-title/dialog-title.component';
import DialogComponent from '@app/core/components/atoms/dialog/dialog/dialog.component';

@NgModule({
  declarations: [
    DialogOverlayComponent,
    DialogComponent,
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent
  ],
  exports: [
    DialogOverlayComponent,
    DialogComponent,
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent
  ]
})
export default class DialogModule { }
