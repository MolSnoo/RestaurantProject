import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpParams } from "@angular/common/http";

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

  display = false;

  onFormSubmit() {
    this.userService.loginUser(this.userModel).subscribe(
      response => {
        // Successfully logged into a user account.
        if (response !== null) {
          // java code from p1 of what we want here
          // HttpSession session = request.getSession();
          // session.setAttribute("user_id", user.getId());
          // session.setAttribute("user_name", user.getName());

          // this.http.post<User>('http://localhost:9000/login', {withCredentials : true});
          sessionStorage.setItem('loggedIn', 'true');
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
