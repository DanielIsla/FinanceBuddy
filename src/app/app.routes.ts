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
  {
    path: 'friends',
    loadComponent: () => import('./friends/friends.page').then( m => m.FriendsPage)
  },
  {
    path: 'statistics',
    loadComponent: () => import('./statistics/statistics.page').then( m => m.StatisticsPage)
  },

  {
    path: 'accounts',
    loadComponent: () => import('./accounts/accounts.page').then( m => m.AccountsPage)
  },
  {
    path: 'accounts/new-account',
    loadComponent: () => import('./new-account/new-account.page').then( m => m.NewAccountPage)
  },
];