import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Todo} from "../todo";
import {TodoService} from "../service/todo.service";

let _id = 1;

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
  getAll(){
    this.todoService.getAll().subscribe(value => {
      this.todos = value;
    });
  }
  ngOnInit() {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    // const value = this.content.value;
    // if (value) {
    //   const todo: Todo = {
    //     id: _id++,
    //     content: value,
    //     complete: false
    //   };
    //   this.todos.push(todo);
    //   this.content.reset();
    // }
    const todo = this.content.value;
    this.todoService.saveTodo(todo).subscribe(() => {
      this.content.reset();
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
    this.content.reset();
  }

}
