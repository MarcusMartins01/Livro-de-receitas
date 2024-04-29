package com.testes.livro.dtos;

import com.testes.livro.entities.Ingrediente;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class IngredienteDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idIngrediente;
    @NotNull(message = "O campo NOME é requerido!")
    private String nome;
    private String descricao;

    public IngredienteDto() {}

    public IngredienteDto(Ingrediente ingrediente) {
        this.idIngrediente = ingrediente.getIdIngrediente();
        this.nome = ingrediente.getNome();
        this.descricao = ingrediente.getDescricao();
    }

    public Integer getIdIngrediente() {
        return idIngrediente;
    }

    public void setIdIngrediente(Integer idIngrediente) {
        this.idIngrediente = idIngrediente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
