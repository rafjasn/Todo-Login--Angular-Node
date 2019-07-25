import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from './../../shared/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router
    ) { }

credentials: TokenPayload = {
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

  ngOnInit() {
  }


  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }

}
