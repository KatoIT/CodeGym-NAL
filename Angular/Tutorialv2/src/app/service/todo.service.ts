import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todo');
  }
  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL + '/todo', todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todo/${id}`);
  }

  updateTodo(id: number, Todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${API_URL}/todo/${id}`, Todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  }
}
