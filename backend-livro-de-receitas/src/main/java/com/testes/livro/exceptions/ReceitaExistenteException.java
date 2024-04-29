package com.testes.livro.exceptions;

public class ReceitaExistenteException extends  RuntimeException{

    public ReceitaExistenteException(String message, Throwable cause) {
        super(message, cause);
    }

    public ReceitaExistenteException(String msg) {
        super(msg);
    }
}
