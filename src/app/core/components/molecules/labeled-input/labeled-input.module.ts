import { NgModule } from '@angular/core';
import InputModule from '@app/core/components/atoms/input/input.module';
import LabelModule from '@app/core/components/atoms/label/label.module';
import TextareaModule from '@app/core/components/atoms/textarea/textarea.module';
import DatePickerModule from '@app/core/components/molecules/date-picker/date-picker.module';
import DateTimePickerModule from '@app/core/components/molecules/date-time-picker/date-time-picker.module';
import LabeledDatePickerComponent from '@app/core/components/molecules/labeled-input/labeled-date-picker/labeled-date-picker.component';
import LabeledDateTimePickerComponent from '@app/core/components/molecules/labeled-input/labeled-date-time-picker/labeled-date-time-picker.component';
import LabeledInputComponent from '@app/core/components/molecules/labeled-input/labeled-input/labeled-input.component';
import LabeledTextareaComponent from '@app/core/components/molecules/labeled-input/labeled-textarea/labeled-textarea.component';

@NgModule({
  declarations: [
    LabeledInputComponent,
    LabeledTextareaComponent,
    LabeledDatePickerComponent,
    LabeledDateTimePickerComponent,
  ],
  imports: [
    LabelModule,
    InputModule,
    TextareaModule,
    DatePickerModule,
    DateTimePickerModule,
  ],
  exports: [
    LabeledInputComponent,
    LabeledTextareaComponent,
    LabeledDatePickerComponent,
    LabeledDateTimePickerComponent,
  ]
})
export default class LabeledInputModule { }
