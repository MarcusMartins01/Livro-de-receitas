package com.testes.livro.dtos;

import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Livro;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class LivroDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idLivro;
    @NotNull(message = "O campo TITULO é requerido!")
    private String titulo;
    @NotNull(message = "O campo ISBN é requerido!")
    private String isbn;
    private String nomeEditor;
    @NotNull(message = "O campo EDITOR é requerido!")
    private Integer editor;

    public LivroDto() {}

    public LivroDto(Livro livro) {
        this.idLivro = livro.getIdLivro();
        this.titulo = livro.getTitulo();
        this.isbn = livro.getIsbn();
        this.nomeEditor = livro.getFuncionario().getNome();
        this.editor = livro.getFuncionario().getIdFuncionario();
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

    public Integer getEditor() {
        return editor;
    }

    public void setEditor(Integer editor) {
        this.editor = editor;
    }

    public String getNomeEditor() {
        return nomeEditor;
    }

    public void setNomeEditor(String nomeEditor) {
        this.nomeEditor = nomeEditor;
    }
}
