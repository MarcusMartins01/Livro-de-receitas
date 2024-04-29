package com.testes.livro.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.entities.Degustacao;
import com.testes.livro.entities.pks.DegustacaoPk;

import java.io.Serializable;
import java.time.LocalDate;

public class DegustacaoDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private DegustacaoPk id = new DegustacaoPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataDegustacao = LocalDate.now();
    private Double notaDegustacao;

    public DegustacaoDto() {}

    public DegustacaoDto(Degustacao degustacao) {
        this.id = degustacao.getId();
        this.dataDegustacao = degustacao.getDataDegustacao();
        this.notaDegustacao = degustacao.getNotaDegustacao();
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
}


