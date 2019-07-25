import { AuthenticationService } from './shared/authentication.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';


  constructor(public auth: AuthenticationService) {
    
  }
}
