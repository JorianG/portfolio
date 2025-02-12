import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    NgxTimelineModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { } 