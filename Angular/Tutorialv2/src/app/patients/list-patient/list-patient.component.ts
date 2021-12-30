import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  listPatient: Patient[] = [];

  constructor(
    private patientService: PatientService
  ) {
  }

  ngOnInit(): void {
    this.listPatient = this.patientService.getAll();
  }

}
