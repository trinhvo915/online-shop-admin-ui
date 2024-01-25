import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutModule } from './layout/layout.module';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    ErrorComponent,
    AnalyticsComponent,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
