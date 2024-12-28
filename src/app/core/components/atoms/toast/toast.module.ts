import { AsyncPipe, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import ToasterComponent from '@app/core/components/atoms/toast/toaster.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [ToasterComponent],
  imports: [
    AsyncPipe,
    NgFor,
    LucideAngularModule,
  ],
  exports: [ToasterComponent],
})
export default class ToastModule { }
