import { NgModule } from '@angular/core';
import DatePickerComponent from '@app/core/components/molecules/date-picker/date-picker.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    LucideAngularModule,
  ],
  exports: [DatePickerComponent]
})
export default class DatePickerModule { }
