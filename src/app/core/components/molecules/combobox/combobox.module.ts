import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import ButtonModule from '@app/core/components/atoms/button/button.module';
import CardModule from '@app/core/components/atoms/card/card.module';
import InputModule from '@app/core/components/atoms/input/input.module';
import { ComboboxComponent } from '@app/core/components/molecules/combobox/combobox/combobox.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [ComboboxComponent],
  imports: [NgIf, NgFor, LucideAngularModule, ButtonModule, CardModule, InputModule],
  exports: [ComboboxComponent]
})
export default class ComboboxModule { }
