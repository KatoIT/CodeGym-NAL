import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Todo} from "../todo";
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(
    private todoService: TodoService
  ) {

  }

  getAll() {
    this.todoService.getAll().subscribe(value => {
      this.todos = value;
    });
  }

  ngOnInit() {
    this.getAll();
  }

  toggleTodo(id: number | undefined) {
    if (id != undefined) {
      const todo = this.todos.find(value => value.id == id);
      if (todo != undefined) {
        todo.complete = !todo.complete;
        this.todoService.updateTodo(id, todo).subscribe();
      }
    }
  }

  saveTodo() {
    console.log("Save ")
    const todo: Todo = {
      content: this.content.value,
      complete: false
    }
    this.todoService.saveTodo(todo).subscribe(() => {
      this.content.reset();
      this.getAll()
    }, e => {
      console.log(e);
    });
    this.content.reset();
  }

  deleteTodo(id: number | undefined) {
    console.log("Delete ", id)
    if (id != undefined) {
      const todo = this.todos.find(value => value.id == id);
      if (todo != undefined) {
        this.todoService.deleteTodo(id).subscribe(() => {
          this.getAll()
        }, e => {
          console.log(e);
        });
      }
    }
  }

}
