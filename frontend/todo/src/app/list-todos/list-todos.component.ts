import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Learn TS', true, new Date()),
    new Todo(3, 'Learn Go Lang', false, new Date()),
  ]

  constructor() { }

  ngOnInit(): void {
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