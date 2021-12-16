import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pass = "";

  constructor() {
  }
  country = ['VietNam', 'Thailand', 'Malaysia', 'Lao', 'Cambodia'];

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      this.passwordConfirmValidator()
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\+84\\d{9,10}$')
    ]),
  });

  passwordConfirmValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = this.pass != control.value;
      return pass ? {passwordConfirm: {value: control.value}} : null;
    };
  }


  ngOnInit(): void {
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
}
