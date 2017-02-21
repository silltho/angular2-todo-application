import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }   from './start/start.component';
<<<<<<< HEAD
import { TodoListComponent }   from './todolist/todolist.component';
=======
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2

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
<<<<<<< HEAD
    path: 'todos',
    component: TodoListComponent
=======
    path: 'test',
    component: StartComponent
>>>>>>> 8ccfcd11c439848ff8da5e64a313d434ea5c1cb2
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
