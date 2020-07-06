import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [{
      
      path:'feed',
      loadChildren: () =>
      import('../pages/home/home.module').then(m => m.HomePageModule)
    
    },
    {
      path:'favorites',
      loadChildren: () =>
      import('../pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
    },
    {
      path:'settings',
      loadChildren: () =>
      import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
      path:'table',
      loadChildren: () =>
      import('../pages/table/table.module').then(m => m.TablePageModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
