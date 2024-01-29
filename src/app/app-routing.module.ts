import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CategoryComponent } from './pages/category/category.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
