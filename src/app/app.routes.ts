import { Routes } from '@angular/router';
import DashboardComponent from '../features/dashboard/presentation/dashboard.component';
import AdminLayoutComponent from '../components/templates/admin-layout/admin-layout.component';

export const routes: Routes = [{
  path: '', title: 'Dashboard',
  component: AdminLayoutComponent,
  children: [{
    path: '', title: 'Dashboard',
    component: DashboardComponent,
  }]
}];
