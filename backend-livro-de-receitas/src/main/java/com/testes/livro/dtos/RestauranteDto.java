package com.testes.livro.dtos;

import com.testes.livro.entities.Restaurante;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class RestauranteDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idRestaurante;
    @NotNull(message = "O campo NOME é requerido!")
    private String nome;
    private String contato;

    public RestauranteDto() {}

    public RestauranteDto(Restaurante restaurante) {
        this.idRestaurante = restaurante.getIdRestaurante();
        this.nome = restaurante.getNome();
        this.contato = restaurante.getContato();
    }

    public Integer getIdRestaurante() {
        return idRestaurante;
    }

    public void setIdRestaurante(Integer idRestaurante) {
        this.idRestaurante = idRestaurante;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }
}
