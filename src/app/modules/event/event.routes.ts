import { Routes } from '@angular/router';
import CreateEventComponent from '@app/modules/event/create-event/create-event.component';
import EventListComponent from '@app/modules/event/event-list/event-list.component';

const eventRoutes: Routes = [{
  path: '',
  component: EventListComponent,
}, {
  path: 'create',
  component: CreateEventComponent,
}];

export default eventRoutes;
