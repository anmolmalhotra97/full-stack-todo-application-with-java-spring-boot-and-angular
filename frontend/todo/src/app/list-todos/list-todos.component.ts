import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: 'Learn Angular' },
    { id: 2, description: 'Learn TS' },
    { id: 3, description: 'Learn GO Lang' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
