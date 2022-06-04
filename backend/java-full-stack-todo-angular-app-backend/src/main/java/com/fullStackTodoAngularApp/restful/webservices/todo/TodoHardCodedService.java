package com.fullStackTodoAngularApp.restful.webservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "Anmol", "Learn FullStack", new Date(), false));
        todos.add(new Todo(++idCounter, "Anmol", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "Anmol", "Learn Docker", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null)
            return null;

        if (todos.remove(todo))
            return todo;

        return null;
    }

    private Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id)
                return todo;
        }
        return null;
    }
}
