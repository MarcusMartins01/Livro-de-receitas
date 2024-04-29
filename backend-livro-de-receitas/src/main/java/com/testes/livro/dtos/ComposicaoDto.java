package com.testes.livro.dtos;

import com.testes.livro.entities.Composicao;
import com.testes.livro.entities.Medida;
import com.testes.livro.entities.pks.ComposicaoPk;

import java.io.Serializable;

public class ComposicaoDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private ComposicaoPk id = new ComposicaoPk();
    private Integer medida;
    private String descricaoMedida;
    private Integer qtdMedida;

    public ComposicaoDto() {}

    public ComposicaoDto(Composicao composicao) {
        this.id = composicao.getId();
        this.medida = composicao.getMedida().getIdMedida();
        this.descricaoMedida = composicao.getMedida().getDescricao();
        this.qtdMedida = composicao.getQtdMedida();
    }

    public ComposicaoPk getId() {
        return id;
    }

    public void setId(ComposicaoPk id) {
        this.id = id;
    }

    public Integer getMedida() {
        return medida;
    }

    public void setMedida(Integer medida) {
        this.medida = medida;
    }

    public String getDescricaoMedida() {
        return descricaoMedida;
    }

    public void setDescricaoMedida(String descricaoMedida) {
        this.descricaoMedida = descricaoMedida;
    }

    public Integer getQtdMedida() {
        return qtdMedida;
    }

    public void setQtdMedida(Integer qtdMedida) {
        this.qtdMedida = qtdMedida;
    }
}
