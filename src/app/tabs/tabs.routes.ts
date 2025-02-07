import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'expenses',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'centeractionbutton',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },

      {
        path: 'due-manager',
        loadComponent:() =>
          import('../due-manager/due-manager.page').then((m) => m.DueManagerPage),
      },

      {
        path: 'more',
        loadComponent: () =>
          import('../more/more.page').then((m) => m.MorePage),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
