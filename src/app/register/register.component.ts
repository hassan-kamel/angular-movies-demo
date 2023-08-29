import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  // form data
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(32),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(32),
    ]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^/),
    ]),
  });

  // form submission
  register() {
    console.log(this.registerForm);
    this._authService
      .signUp({
        name: `${this.registerForm.value.first_name}-${this.registerForm.value.last_name}`,
        phone: '01159958642',
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
        rePassword: this.registerForm.value.password!,
      })
      .subscribe((res) => {
        console.log('res: ', res);
        this._router.navigateByUrl('/home');
      });
  }
}
