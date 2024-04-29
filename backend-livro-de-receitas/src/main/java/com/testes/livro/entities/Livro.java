package com.testes.livro.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Livro implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idLivro;
    private String titulo;
    private String isbn;
    @ManyToOne
    @JoinColumn(name = "editor")
    private Funcionario funcionario;

    public Livro() {}

    public Livro(Integer idLivro, String titulo, String isbn, Funcionario funcionario) {
        this.idLivro = idLivro;
        this.titulo = titulo;
        this.isbn = isbn;
        this.funcionario = funcionario;
    }

    public Integer getIdLivro() {
        return idLivro;
    }

    public void setIdLivro(Integer idLivro) {
        this.idLivro = idLivro;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Livro livro = (Livro) o;
        return Objects.equals(idLivro, livro.idLivro) && Objects.equals(titulo, livro.titulo) && Objects.equals(isbn, livro.isbn) && Objects.equals(funcionario, livro.funcionario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idLivro, titulo, isbn, funcionario);
    }
}
