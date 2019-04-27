import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(9)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    role: new FormControl(''),
    birthDate: new FormControl(''),
    isAllowed: new FormControl(false)
  });

  initializeForm(): void {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      role: '',
      birthDate: '',
      isAllowed: false
    });
  }
}
