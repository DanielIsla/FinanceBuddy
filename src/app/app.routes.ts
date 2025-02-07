import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'due-manager',
    loadComponent: () => import('./due-manager/due-manager.page').then( m => m.DueManagerPage)
  },
  {
    path: 'more',
    loadComponent: () => import('./more/more.page').then( m => m.MorePage)
  },
  {
    path: 'newdue',
    loadComponent: () => import('./new-due/new-due.page').then( m => m.NewDuePage)
  },
  {
    path: 'newexpense',
    loadComponent: () => import('./new-expense/new-expense.page').then( m => m.NewExpensePage)
  },
];