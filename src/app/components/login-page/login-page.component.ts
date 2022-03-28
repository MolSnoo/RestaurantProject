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

  userModel = new User("", "", "", "", "", null, "", "", null, 0);

  display = false;

  onFormSubmit() {
    this.userService.loginUser(this.userModel).subscribe(
      response => {
        // Successfully logged into a user account.
        if (response !== null && response.userId) {
          sessionStorage.setItem('loggedIn', 'true');
          sessionStorage.setItem('user', response.userId.toString());
          console.log(sessionStorage.getItem('user'));
          this.router.navigate(['/'])
        }
        // Failed to find a user account.
        else {
          this.display = true;
        }
      }
    );
  }
}
