import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'due-manager',
    loadComponent: () => import('./pages/due-manager/due-manager.page').then( m => m.DueManagerPage)
  },
  {
    path: 'more',
    loadComponent: () => import('./pages/more/more.page').then( m => m.MorePage)
  },
  {
    path: 'newdue',
    loadComponent: () => import('./pages/new-due/new-due.page').then( m => m.NewDuePage)
  },
  {
    path: 'newexpense',
    loadComponent: () => import('./pages/new-expense/new-expense.page').then( m => m.NewExpensePage)
  },
  {
    path: 'friends',
    loadComponent: () => import('./pages/friends/friends.page').then( m => m.FriendsPage)
  },
  {
    path: 'statistics',
    loadComponent: () => import('./pages/statistics/statistics.page').then( m => m.StatisticsPage)
  },

  {
    path: 'accounts',
    loadComponent: () => import('./pages/accounts/accounts.page').then( m => m.AccountsPage)
  },
  {
    path: 'accounts/new-account',
    loadComponent: () => import('./pages/new-account/new-account.page').then( m => m.NewAccountPage)
  },
  {
    path: 'account-details',
    loadComponent: () => import('./pages/account-details/account-details.page').then( m => m.AccountDetailsPage)
  },  {
    path: 'new-friend',
    loadComponent: () => import('./pages/new-friend/new-friend.page').then( m => m.NewFriendPage)
  },
  {
    path: 'friends-contacts',
    loadComponent: () => import('./pages/friends-contacts/friends-contacts.page').then( m => m.FriendsContactsPage)
  },

];