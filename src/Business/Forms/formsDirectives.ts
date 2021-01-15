import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormValidations {
  public customerLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  LoginMethod() {
    this.customerLogin = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4    )])],
    });
    return this.customerLogin;
  }
}
