import { Component, OnInit } from '@angular/core';
import { MenuitemService } from './menuitem.service';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css'],
  template: `{{ title }}
            <h2>Menu here</h2>
            <ul>
              <li *ngFor="let menulist of menulists">
                {{ menulist }}
              </li>
            </ul>
            ` 
})
export class MenuitemComponent implements OnInit {

  title = "Menu"

  menulist = ["item1", "item2", "item3"];

  constructor(service: MenuitemService) { 
    this.menulist = service.getMenuitems();
  }

  ngOnInit(): void {
  }

}
