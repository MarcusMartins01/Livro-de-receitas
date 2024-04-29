package com.testes.livro.dtos;

import com.testes.livro.entities.Medida;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class MedidaDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idMedida;
    @NotNull(message = "O campo DESCRICAO é requerido!")
    private  String descricao;

    public MedidaDto() {}

    public MedidaDto(Medida medida) {
        this.idMedida = medida.getIdMedida();
        this.descricao = medida.getDescricao();
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
}
