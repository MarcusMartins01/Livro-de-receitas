package com.testes.livro.dtos;

import com.testes.livro.entities.Parametro;
import com.testes.livro.entities.pks.ParametroPk;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

public class ParametroDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private ParametroPk id = new ParametroPk();
    @NotNull(message = "O campo QtdRECEITAS é requerido!")
    private Integer qtdReceitas;

    public ParametroDto() {}

    public ParametroDto(Parametro parametro) {
        this.id = parametro.getId();
        this.qtdReceitas = parametro.getQtdReceitas();
    }

    public ParametroPk getId() {
        return id;
    }

    public void setId(ParametroPk id) {
        this.id = id;
    }

    public Integer getQtdMedidas() {
        return qtdReceitas;
    }

    public void setQtdMedidas(Integer qtdMedidas) {
        this.qtdReceitas = qtdMedidas;
    }
}
