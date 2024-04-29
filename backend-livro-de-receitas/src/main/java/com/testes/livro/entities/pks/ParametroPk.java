package com.testes.livro.entities.pks;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Id;

import java.util.Objects;

@Embeddable
public class ParametroPk {

    private Integer idMes;
    private Integer idAno;

    public ParametroPk() {
    }

    public ParametroPk(Integer idMes, Integer idAno) {
        this.idMes = idMes;
        this.idAno = idAno;
    }

    public Integer getIdMes() {
        return idMes;
    }

    public void setIdMes(Integer idMes) {
        this.idMes = idMes;
    }

    public Integer getIdAno() {
        return idAno;
    }

    public void setIdAno(Integer idAno) {
        this.idAno = idAno;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParametroPk that = (ParametroPk) o;
        return Objects.equals(idMes, that.idMes) && Objects.equals(idAno, that.idAno);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idMes, idAno);
    }
}
