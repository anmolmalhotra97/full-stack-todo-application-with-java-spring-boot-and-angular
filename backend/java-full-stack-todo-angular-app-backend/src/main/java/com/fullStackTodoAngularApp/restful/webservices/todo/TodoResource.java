package com.fullStackTodoAngularApp.restful.webservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping(path = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodoForUser(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardCodedService.deleteById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }
        
        return ResponseEntity.notFound().build();
    }
}
