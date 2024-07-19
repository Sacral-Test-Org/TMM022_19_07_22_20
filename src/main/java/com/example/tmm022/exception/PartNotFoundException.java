package com.example.tmm022.exception;

public class PartNotFoundException extends RuntimeException {
    private String errorMessage;

    public PartNotFoundException(String message) {
        super(message);
        this.errorMessage = message;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
