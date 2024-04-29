package com.testes.livro.entities;

import com.testes.livro.dtos.ComposicaoDto;
import com.testes.livro.entities.pks.ComposicaoPk;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Composicao implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private ComposicaoPk id = new ComposicaoPk();
    @ManyToOne
    @JoinColumn(name = "medida_id")
    private Medida medida;
    private Integer qtdMedida;

    public Composicao() {}

    public Composicao(ComposicaoPk id, Medida medida, Integer qtdMedida) {
        this.id = id;
        this.medida = medida;
        this.qtdMedida = qtdMedida;
    }

    public ComposicaoPk getId() {
        return id;
    }

    public void setId(ComposicaoPk id) {
        this.id = id;
    }

    public Medida getMedida() {
        return medida;
    }

    public void setMedida(Medida medida) {
        this.medida = medida;
    }

    public Integer getQtdMedida() {
        return qtdMedida;
    }

    public void setQtdMedida(Integer qtdMedida) {
        this.qtdMedida = qtdMedida;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Composicao that = (Composicao) o;
        return Objects.equals(id, that.id) && Objects.equals(medida, that.medida) && Objects.equals(qtdMedida, that.qtdMedida);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, medida, qtdMedida);
    }
}
