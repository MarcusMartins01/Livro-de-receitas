package com.testes.livro.entities.pks;

import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Receita;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.Objects;

@Embeddable
public class DegustacaoPk {
    @ManyToOne
    @JoinColumn(name = "degustador")
    private Funcionario funcionario;
    @ManyToOne
    private Receita receita;

    public DegustacaoPk() {
    }

    public DegustacaoPk(Funcionario funcionario, Receita receita) {
        this.funcionario = funcionario;
        this.receita = receita;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    public Receita getReceita() {
        return receita;
    }

    public void setReceita(Receita receita) {
        this.receita = receita;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DegustacaoPk that = (DegustacaoPk) o;
        return Objects.equals(funcionario, that.funcionario) && Objects.equals(receita, that.receita);
    }

    @Override
    public int hashCode() {
        return Objects.hash(funcionario, receita);
    }
}
