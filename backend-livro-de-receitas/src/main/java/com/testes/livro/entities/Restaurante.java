package com.testes.livro.entities;

import com.testes.livro.dtos.RestauranteDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Restaurante implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRestaurante;
    private String nome;
    private String contato;

    public Restaurante() {}

    public Restaurante(Integer idRestaurante, String nome, String contato) {
        this.idRestaurante = idRestaurante;
        this.nome = nome;
        this.contato = contato;
    }

    public Restaurante(RestauranteDto dto) {
        this.idRestaurante = dto.getIdRestaurante();
        this.nome = dto.getNome();
        this.contato = dto.getContato();
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Restaurante that = (Restaurante) o;
        return Objects.equals(idRestaurante, that.idRestaurante) && Objects.equals(nome, that.nome) && Objects.equals(contato, that.contato);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRestaurante, nome, contato);
    }
}
