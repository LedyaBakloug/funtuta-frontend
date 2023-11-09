import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = this.fb.group({
      username: ['ledya', Validators.required],
      password: ['1994', Validators.required]
    });
  }

  login() {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
      console.log(res)
    });
  }
}
