import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'parks',
        children: [
          {
            path: '',
            loadChildren: '../park-list/park-list.module#ParkListPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../park-map/park-map.module#ParkMapPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'details/:id',
        children: [
          {
           path: '',
           loadChildren:  '../park-details/park-details.module#ParkDetailsPageModule' 
          }]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
