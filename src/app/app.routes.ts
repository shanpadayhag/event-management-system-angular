import { Routes } from '@angular/router';
import AdminLayoutComponent from '@app/modules/layout/admin/admin-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full',
}, {
  path: 'login',
  loadComponent: () => import('@app/modules/auth/login/login.component').then(component => component.default),
}, {
  path: '', component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: () => import('@app/modules/dashboard/dashboard.routes').then(routes => routes.default)
  }, {
    path: 'events',
    loadChildren: () => import('@app/modules/event/event.routes').then(routes => routes.default)
  }]
}];

export default routes;
