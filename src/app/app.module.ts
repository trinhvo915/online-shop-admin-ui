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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    ErrorComponent,
    AnalyticsComponent,
    CategoryComponent,
    EcommerceComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    LayoutModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    NzTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LayoutModule, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
