package com.testes.livro.dtos;

import com.testes.livro.entities.Cargo;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class CargoDto implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer idCargo;
    private String descricao;

    public CargoDto() {}

    public CargoDto(Cargo cargo) {
        this.idCargo = cargo.getIdCargo();
        this.descricao = cargo.getDescricao();
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
}
