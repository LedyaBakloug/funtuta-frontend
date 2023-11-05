import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private auth: AuthService) {}

  username = 'ledya'
  password = '1994'


  login() {
    console.log(this.username)
    this.auth.login(this.username, this.password).subscribe(res => {
        console.log(res)
    });
  }

}
