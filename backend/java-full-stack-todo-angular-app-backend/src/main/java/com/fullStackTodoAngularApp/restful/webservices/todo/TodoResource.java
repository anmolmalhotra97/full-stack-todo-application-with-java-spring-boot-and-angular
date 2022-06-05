package com.fullStackTodoAngularApp.restful.webservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllTodosForUser(@PathVariable String username) {
        return todoHardCodedService.findAll();
    }

    @GetMapping(path = "/users/{username}/todos/{id}")
    public Todo getAllTodoForUserById(@PathVariable String username, @PathVariable long id) {
        return todoHardCodedService.findById(id);
    }

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoForUser(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardCodedService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo requestBody) {
        Todo updatedTodo = todoHardCodedService.save(requestBody);
        if (updatedTodo != null) {
            return ResponseEntity.ok(updatedTodo);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(path = "/users/{username}/todos")
    public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo requestBody) {
        Todo createdTodo = todoHardCodedService.save(requestBody);
        //Location
        //Get current resource URL
        //{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
