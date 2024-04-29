package com.testes.livro.exceptions;

public class ObjectnotFoundException extends RuntimeException{

    public ObjectnotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public ObjectnotFoundException(String msg) {
        super(msg);
    }
}
