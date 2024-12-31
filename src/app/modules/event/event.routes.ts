import { Routes } from '@angular/router';
import CreateEventComponent from '@app/modules/event/create-event/create-event.component';
import EditEventComponent from '@app/modules/event/edit-event/edit-event.component';
import EventListComponent from '@app/modules/event/event-list/event-list.component';

const eventRoutes: Routes = [{
  path: '',
  component: EventListComponent,
}, {
  path: 'create',
  component: CreateEventComponent,
}, {
  path: 'edit/:id',
  component: EditEventComponent,
}];

export default eventRoutes;
