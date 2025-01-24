import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './master/user/user.component';
import { UserFormComponent } from './master/user/user-form/user-form.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'user',
        component : UserComponent
      },
      {
        path: 'user-add',
        component : UserFormComponent
      },
    ]
  }
];
