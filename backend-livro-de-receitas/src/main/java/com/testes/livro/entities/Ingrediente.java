package com.testes.livro.entities;

import com.testes.livro.dtos.IngredienteDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Ingrediente implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idIngrediente;
    private String nome;
    private String descricao;

    public Ingrediente() {}

    public Ingrediente(Integer idIngrediente, String nome, String descricao) {
        this.idIngrediente = idIngrediente;
        this.nome = nome;
        this.descricao = descricao;
    }

    public Ingrediente(IngredienteDto dto) {
        this.idIngrediente = dto.getIdIngrediente();
        this.nome = dto.getNome();
        this.descricao = dto.getDescricao();
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingrediente that = (Ingrediente) o;
        return Objects.equals(idIngrediente, that.idIngrediente) && Objects.equals(nome, that.nome) && Objects.equals(descricao, that.descricao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idIngrediente, nome, descricao);
    }
}
