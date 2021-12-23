import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + '/products');
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post<any>(API_URL + '/products', product);
  }

  findById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/products/${id}`);
  }

  updateProduct(id: string, Product: Product): Observable<any> {
    return this.http.patch<any>(`${API_URL}/products/${id}`, Product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/products/${id}`);
  }

}
