// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: '/users' }
];