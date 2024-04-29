package com.testes.livro.entities;

import com.testes.livro.dtos.MedidaDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Medida implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMedida;
    private  String descricao;

    public Medida() {}

    public Medida(Integer idMedida, String descricao) {
        this.idMedida = idMedida;
        this.descricao = descricao;
    }

    public Medida(MedidaDto dto) {
        this.idMedida = dto.getIdMedida();
        this.descricao = dto.getDescricao();
    }

    public Integer getIdMedida() {
        return idMedida;
    }

    public void setIdMedida(Integer idMedida) {
        this.idMedida = idMedida;
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
        Medida medida = (Medida) o;
        return Objects.equals(idMedida, medida.idMedida) && Objects.equals(descricao, medida.descricao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idMedida, descricao);
    }
}
