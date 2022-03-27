import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  userModel = new User("", "", "", "", "", null, "", "", null);

  onFormSubmit() {
    this.userService.loginUser(this.userModel).subscribe(
      response => {
        // Successfully logged into a user account.
        if (response !== null) {
          this.router.navigate(['/'])
        }
        // Failed to find a user account.
        else {
          // TODO: Show an error message
        }
      }
    );
  }
}
