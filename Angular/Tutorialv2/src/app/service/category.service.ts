import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/categories');
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.post<any>(API_URL + '/categories', category);
  }

  findById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/categories/${id}`);
  }

  updateCategory(id: string, category: Category): Observable<any> {
    return this.http.patch<any>(`${API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/categories/${id}`);
  }

}
