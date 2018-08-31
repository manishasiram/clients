import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginModel } from '../login/login-model';
import { AuthServices } from '../core/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model: LoginModel;
  email: FormControl;
  password: FormControl;
  InvalidCredentials: boolean;
  hide: boolean;

  constructor(private auth: AuthServices,
    private router: Router) {
    this.model = new LoginModel();
    this.hide = true;
  }

  ngOnInit() {
    if (this.auth.validateUserTocken()) {
      this.auth.logout();
    }
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      if (this.auth.validateUserDetails(this.loginForm.value)) {
        this.InvalidCredentials = false;
        this.auth.setTocken();
        this.router.navigate(['users/user-profile']);
      } else {
        this.InvalidCredentials = true;
        console.log('Invalid credentials');
      }
    }
  }

}
