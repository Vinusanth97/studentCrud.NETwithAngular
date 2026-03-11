import { Routes } from '@angular/router';
export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./register/register').then(m => m.Register)
  },
   {
    path:'students/:id',
    loadComponent:()=>import('./home/home').then(m=>m.Home)

   },

  {
    path:'register/:id',
    loadComponent:()=>import('./register/register').then(m=>m.Register)
  },
  {
    path: 'students',
    loadComponent: () => import('./home/home').then(m => m.Home)
  }
];
