package com.testes.livro.entities;

import com.testes.livro.dtos.CargoDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Cargo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCargo;
    private String descricao;

    public Cargo() {}

    public Cargo(Integer idCargo, String descricao) {
        this.idCargo = idCargo;
        this.descricao = descricao;
    }

    public Cargo(CargoDto dto) {
        this.idCargo = dto.getIdCargo();
        this.descricao = dto.getDescricao();
    }


    public Integer getIdCargo() {
        return idCargo;
    }

    public void setIdCargo(Integer idCargo) {
        this.idCargo = idCargo;
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
        Cargo cargo = (Cargo) o;
        return Objects.equals(idCargo, cargo.idCargo) && Objects.equals(descricao, cargo.descricao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCargo, descricao);
    }
}
