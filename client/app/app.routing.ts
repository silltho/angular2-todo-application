import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }   from './start/start.component';
import { TodoListComponent }   from './todolist/todolist.component';

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
    path: 'todos',
    component: TodoListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
