import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPatientComponent } from './patients/list-patient/list-patient.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { DeletePatientComponent } from './patients/delete-patient/delete-patient.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ListPatientComponent,
    EditPatientComponent,
    DeletePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
