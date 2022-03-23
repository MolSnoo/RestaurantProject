import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  categoryId: any;
  products: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('catId');
    if (this.categoryId) {
      this.dataService.getProductByCatId(this.categoryId).subscribe(data => {
        this.products = data.data;
      });
    }
    else {
      this.dataService.getProducts().subscribe(data => {
        this.products = data.data;
      });
    }
  }

}
