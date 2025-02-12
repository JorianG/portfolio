import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    AppComponent
  ],
  exports: [
    // No need to export BadgeConpetenceComponent
  ]
})
export class BadgeConpetenceModule { } 