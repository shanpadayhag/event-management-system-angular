import { Routes } from '@angular/router';
import LoginComponent from '@app/modules/auth/login/login.component';

const authRoutes: Routes = [{
  path: '/login',
  component: LoginComponent,
}];

export default authRoutes;
