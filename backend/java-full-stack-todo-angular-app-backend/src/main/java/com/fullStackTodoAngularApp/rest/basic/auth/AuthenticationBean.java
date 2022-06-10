package com.fullStackTodoAngularApp.restful.webservices.basic.auth;

public class AuthenticationBean {

    String message;

    public AuthenticationBean() {
    }

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}

