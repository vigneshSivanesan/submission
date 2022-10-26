import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionComponent } from './submission/submission.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubmissionRoutingModule } from './submission/submission-routing.module';
import { MapAreaComponent } from './map-area/map-area.component';
@NgModule({
  declarations: [
    SubmissionComponent,
    MapAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey,
      apiVersion: '3.31'
  }),
  NgSelectModule,
  SubmissionRoutingModule
  ],
  exports: [SubmissionComponent]
})
export class SubmissionModule { }
