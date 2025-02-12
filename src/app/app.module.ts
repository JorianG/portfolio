import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LinkCompetenceComponent } from './link-competence/link-competence.component';
// import { TimelineComponent } from './timeline/timeline.component';
// other imports...

@NgModule({
  declarations: [
    AppComponent,
    // other components...
    LinkCompetenceComponent,
    // TimelineComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // other modules...
    TimelineModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { } 