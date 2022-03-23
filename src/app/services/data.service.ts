import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/category');
  }

  getSubcategories(catId: any): Observable<any> {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/subcategory/' + catId);
  }

  getProducts(): Observable<any> {
      return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products');
  }

  getProductByCatId(catId: any): Observable<any> {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/cat/' + catId);
  }

}
