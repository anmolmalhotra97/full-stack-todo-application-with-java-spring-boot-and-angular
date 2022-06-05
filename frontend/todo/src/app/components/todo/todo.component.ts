import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //We have added this since we update the todo with data from backend server async
    //Hence todo will remain null at its first initialisation and be filled with data later on
    //Try commenting the below line and see the console logs for update page.
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.retrieveTodoById("Anmol", this.id).subscribe(
        response => {
          this.todo = response;
        }
      )
    }
  }

  saveTodo() {
    if (this.id === -1) {
    } else {
      this.todoService.updateTodo("Anmol", this.id, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
    }
  }

}
