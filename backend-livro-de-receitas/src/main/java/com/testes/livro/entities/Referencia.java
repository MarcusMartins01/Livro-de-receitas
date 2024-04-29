package com.testes.livro.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.dtos.ReferenciaDto;
import com.testes.livro.entities.pks.ReferenciaPk;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Referencia implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    private ReferenciaPk id = new ReferenciaPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataInicio;
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataFim;

    public Referencia() {}

    public Referencia(ReferenciaPk id, LocalDate dataInicio, LocalDate dataFim) {
        this.id = id;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    public Referencia(ReferenciaDto dto) {
        this.id = dto.getId();
        this.dataInicio = dto.getDataInicio();
        this.dataFim = dto.getDataFim();
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Referencia that = (Referencia) o;
        return Objects.equals(id, that.id) && Objects.equals(dataInicio, that.dataInicio) && Objects.equals(dataFim, that.dataFim);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataInicio, dataFim);
    }
}
