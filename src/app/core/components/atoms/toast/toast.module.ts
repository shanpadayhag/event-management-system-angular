import { NgModule } from '@angular/core';
import ToasterComponent from '@app/core/components/atoms/toast/toaster.component';

@NgModule({
  declarations: [ToasterComponent],
  exports: [ToasterComponent],
})
export default class ToastModule { }
