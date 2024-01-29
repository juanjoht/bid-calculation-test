import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes,{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
