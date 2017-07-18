import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';






import { AppComponent } from './app.component';
import { HomeComponent } from './main/user/home.component';
import { AsideComponent } from './main/partials/aside/aside.component';
import { NavComponent } from './main/partials/nav/nav.component';
import { FooterComponent } from './main/partials/footer/footer.component';
import { AppRouting } from './main/app-routing/app-routing';
import { TestHistoryComponent } from './main/test-history/test-history.component';
import { DialogOverviewExampleDialog } from './main/partials/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    NavComponent,
    FooterComponent,
    TestHistoryComponent,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    CdkTableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
