import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/user/home.component';
import { AsideComponent } from './main/partials/aside/aside.component';
import { NavComponent } from './main/partials/nav/nav.component';
import { FooterComponent } from './main/partials/footer/footer.component';
import { AppRouting } from './main/app-routing/app-routing';
import { TestHistoryComponent } from './main/test-history/test-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    NavComponent,
    FooterComponent,
    TestHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
