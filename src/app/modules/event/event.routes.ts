import { Routes } from '@angular/router';
import EventListComponent from '@app/modules/event/event-list/event-list.component';

const eventRoutes: Routes = [{
  path: '',
  component: EventListComponent,
}];

export default eventRoutes;
