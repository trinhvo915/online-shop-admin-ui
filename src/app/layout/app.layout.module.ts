import { NgModule } from '@angular/core';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppLayoutComponent } from './app-layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent,
    AppLayoutComponent,
  ],
  imports: [RouterModule],
  providers: [],
})
export class AppLayoutModule {}
