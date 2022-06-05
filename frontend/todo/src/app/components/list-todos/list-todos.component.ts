import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from 'src/app/service/data/todo-data.service';



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("Anmol").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(id);
    this.todoService.deleteTodo("Anmol", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete for Todo (${id}) is Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    console.log(id);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}

//DONT PUT this RIGHT BELOW @Component btw @Component and Component Class ---> things would break
//anywhere else is fine
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) { }
}