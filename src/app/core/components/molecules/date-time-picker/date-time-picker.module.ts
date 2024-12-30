import { NgModule } from '@angular/core';
import DateTimePickerComponent from '@app/core/components/molecules/date-time-picker/date-time-picker.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [DateTimePickerComponent],
  imports: [
    LucideAngularModule,
  ],
  exports: [DateTimePickerComponent]
})
export default class DateTimePickerModule { }
