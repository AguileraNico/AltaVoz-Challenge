import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: 'home',
  loadChildren: async () => (await import('./modules/home/home.module')).HomeModule
}, {
  path: 'profile',
  loadChildren: async () => (await import('./modules/profile/profile.module')).ProfileModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
