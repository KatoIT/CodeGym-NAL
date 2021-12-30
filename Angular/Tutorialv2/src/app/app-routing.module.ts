import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPatientComponent} from "./patients/list-patient/list-patient.component";
import {EditPatientComponent} from "./patients/edit-patient/edit-patient.component";
import {DeletePatientComponent} from "./patients/delete-patient/delete-patient.component";

const routes: Routes = [
  {
    path: 'listPatient',
    component: ListPatientComponent
  },
  {
    path: 'editPatient/:id',
    component: EditPatientComponent
  },
  {
    path: 'deletePatient/:id',
    component:DeletePatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
