import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }   from './start/start.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'test',
    component: StartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
