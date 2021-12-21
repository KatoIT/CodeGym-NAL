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

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/product', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }

  updateProduct(id: number, Product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/product/${id}`, Product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }

}
