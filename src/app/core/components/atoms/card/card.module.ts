import { NgModule } from '@angular/core';
import CardContentComponent from '@app/core/components/atoms/card/card-content/card-content.component';
import CardDescriptionComponent from '@app/core/components/atoms/card/card-description/card-description.component';
import CardHeaderComponent from '@app/core/components/atoms/card/card-header/card-header.component';
import CardTitleComponent from '@app/core/components/atoms/card/card-title/card-title.component';
import CardComponent from '@app/core/components/atoms/card/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
  ],
})
export default class CardModule { }
