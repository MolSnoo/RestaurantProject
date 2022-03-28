import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //loggedIn = user.service.isLoggedin()
  selected = true;
  collapsed = false;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
