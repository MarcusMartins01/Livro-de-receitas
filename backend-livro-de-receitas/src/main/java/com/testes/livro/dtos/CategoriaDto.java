package com.testes.livro.dtos;

import com.testes.livro.entities.Categoria;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class CategoriaDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idCategoria;
    @NotNull(message = "O campo DESCRICAO é requerido!")
    private String descricao;

    public CategoriaDto() {}

    public CategoriaDto(Categoria categoria) {
        this.idCategoria = categoria.getIdCategoria();
        this.descricao = categoria.getDescricao();
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
