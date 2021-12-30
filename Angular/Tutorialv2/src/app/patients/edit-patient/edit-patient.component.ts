import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Patient} from "../../model/patient";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  id: any = 0;
  patient: Patient | undefined = {
    patientName: "An",
    patientId: "BN-435",
    idRecord: "BA-001",
    doctorName: "",
    reason: "",
    startIn: new Date(),
    treatmentMethods: "",
    startOut: new Date(),
  };

  formGroup: FormGroup = new FormGroup({
    idRecord: new FormControl(this.patient?.idRecord, [
      Validators.required,
    ]),
    patientId: new FormControl(this.patient?.patientId, [
      Validators.required,
    ]),
    patientName: new FormControl(this.patient?.patientName, [
      Validators.required,
      Validators.pattern('^[^<0-9>]*$')
    ]),
    startIn: new FormControl(this.patient?.startIn, [
      Validators.required,
    ]),
    startOut: new FormControl(this.patient?.startOut, [
      Validators.required,
    ]),
    reason: new FormControl(this.patient?.reason, [
      Validators.required,
    ]),
    treatmentMethods: new FormControl(this.patient?.treatmentMethods, [
      Validators.required,
    ]),
    doctorName: new FormControl(this.patient?.doctorName, [
      Validators.required,
    ]),
  });

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
    this.formGroup = new FormGroup({
      idRecord: new FormControl(this.patient?.idRecord, [
        Validators.required,
      ]),
      patientId: new FormControl(this.patient?.patientId, [
        Validators.required,
      ]),
      patientName: new FormControl(this.patient?.patientName, [
        Validators.required,
        Validators.pattern('^[^<0-9>]*$')
      ]),
      startIn: new FormControl(formatDate(this.patient?.startIn ? this.patient?.startIn : new Date(), "yyyy-MM-dd", "en"), [
        Validators.required,
      ]),
      startOut: new FormControl(formatDate(this.patient?.startOut ? this.patient?.startOut : new Date(), "yyyy-MM-dd", "en"), [
        Validators.required,
      ]),
      reason: new FormControl(this.patient?.reason, [
        Validators.required,
      ]),
      treatmentMethods: new FormControl(this.patient?.treatmentMethods, [
        Validators.required,
      ]),
      doctorName: new FormControl(this.patient?.doctorName, [
        Validators.required,
      ]),
    });
  }


  getPatient(id: string) {
    this.patient = this.patientService.findPatientById(id);
  }

  updatePatient(id: any) {
    this.router.navigate(['/listPatient'])
    this.patientService.updatePatient(id, this.formGroup.value)
  }

  get patientName() {
    return this.formGroup.get('patientName');
  }

  get startIn() {
    return this.formGroup.get('startIn');
  }

  get startOut() {
    return this.formGroup.get('startOut');
  }

  get reason() {
    return this.formGroup.get('reason');
  }

  get treatmentMethods() {
    return this.formGroup.get('treatmentMethods');
  }

  get doctorName() {
    return this.formGroup.get('doctorName');
  }

}
