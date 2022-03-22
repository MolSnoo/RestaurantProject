import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css'],
  template: "{{ title }}"
})
export class MenuitemComponent implements OnInit {

  title = "Menu"

  constructor() { }

  ngOnInit(): void {
  }

}
