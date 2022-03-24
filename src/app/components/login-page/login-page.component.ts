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

  emailinput: string = '';
  passinput: string = '';

  userModel = new User(this.emailinput, this.passinput, "", "", "", null, "", "", null);

  onFormSubmit() {

    console.log(this.userModel);
    this.userService.loginUser(this.userModel).subscribe(response => { this.router.navigate(['/'])});
  }

}
