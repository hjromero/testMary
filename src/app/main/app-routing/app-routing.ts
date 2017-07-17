import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../user/home.component';
import { TestHistoryComponent } from '../test-history/test-history.component';



const routes : Routes =
  [
    {path: 'user', component: HomeComponent },
    {path: 'history', component: TestHistoryComponent },
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRouting {

}
