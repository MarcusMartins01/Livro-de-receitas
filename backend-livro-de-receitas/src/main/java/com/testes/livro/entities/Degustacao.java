package com.testes.livro.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.dtos.DegustacaoDto;
import com.testes.livro.entities.pks.DegustacaoPk;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Degustacao implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private DegustacaoPk id = new DegustacaoPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataDegustacao = LocalDate.now();
    private Double notaDegustacao;

    public Degustacao() {}

    public Degustacao(DegustacaoPk id, Double notaDegustacao) {
        this.id = id;
        this.notaDegustacao = notaDegustacao;
    }

    public Degustacao(DegustacaoDto dto) {
        this.id = dto.getId();
        this.notaDegustacao = dto.getNotaDegustacao();
    }

    public DegustacaoPk getId() {
        return id;
    }

    public void setId(DegustacaoPk id) {
        this.id = id;
    }

    public LocalDate getDataDegustacao() {
        return dataDegustacao;
    }

    public void setDataDegustacao(LocalDate dataDegustacao) {
        this.dataDegustacao = dataDegustacao;
    }

    public Double getNotaDegustacao() {
        return notaDegustacao;
    }

    public void setNotaDegustacao(Double notaDegustacao) {
        this.notaDegustacao = notaDegustacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Degustacao that = (Degustacao) o;
        return Objects.equals(id, that.id) && Objects.equals(dataDegustacao, that.dataDegustacao) && Objects.equals(notaDegustacao, that.notaDegustacao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataDegustacao, notaDegustacao);
    }
}
