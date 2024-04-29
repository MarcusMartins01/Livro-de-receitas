package com.testes.livro.entities;

import com.testes.livro.dtos.ParametroDto;
import com.testes.livro.entities.pks.ParametroPk;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Parametro implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private ParametroPk id = new ParametroPk();
    private Integer qtdReceitas;

    public Parametro() {}

    public Parametro(ParametroPk id, Integer qtdReceitas) {
        this.id = id;
        this.qtdReceitas = qtdReceitas;
    }

    public Parametro(ParametroDto dto) {
        this.id = dto.getId();
        this.qtdReceitas = dto.getQtdMedidas();
    }

    public ParametroPk getId() {
        return id;
    }

    public void setId(ParametroPk id) {
        this.id = id;
    }

    public Integer getQtdReceitas() {
        return qtdReceitas;
    }

    public void setQtdReceitas(Integer qtdReceitas) {
        this.qtdReceitas = qtdReceitas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Parametro parametro = (Parametro) o;
        return Objects.equals(id, parametro.id) && Objects.equals(qtdReceitas, parametro.qtdReceitas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, qtdReceitas);
    }
}
