import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
  patient: Patient | undefined = {
    patientName: "An",
    patientId: "BN-435",
    idRecord: "BA-001",
    doctorName: "",
    reason: "",
    startIn: new Date(),
    treatmentMethods: "",
    startOut: new Date(),
  }
  id: any = "";

  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getPatient(this.id)
    });
  }

  ngOnInit(): void {
  }

  getPatient(id: string) {
    this.patient = this.patientService.findPatientById(id);
  }


  delete() {
    // this.router.navigate(['/listPatient'])
    this.patientService.deletePatient(this.id)
  }
}
