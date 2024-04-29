package com.testes.livro.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.entities.Referencia;
import com.testes.livro.entities.pks.ReferenciaPk;

import java.io.Serializable;
import java.time.LocalDate;

public class ReferenciaDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private ReferenciaPk id = new ReferenciaPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataInicio;
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataFim;

    public ReferenciaDto() {}

    public ReferenciaDto(Referencia referencia) {
        this.id = referencia.getId();
        this.dataInicio = referencia.getDataInicio();
        this.dataFim = referencia.getDataFim();
    }

    public ReferenciaPk getId() {
        return id;
    }

    public void setId(ReferenciaPk id) {
        this.id = id;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }
}
