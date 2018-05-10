import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListingsComponent }   from './listings/listings.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'listings',
   component: ListingsComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
