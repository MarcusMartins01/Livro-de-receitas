package com.testes.livro.entities.pks;

import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Ingrediente;
import com.testes.livro.entities.Receita;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.Objects;

@Embeddable
public class ComposicaoPk {

    @ManyToOne
    @JoinColumn(name = "ingrediente_id")
    private Ingrediente ingrediente;
    @ManyToOne
    private Receita receita;

    public ComposicaoPk() {
    }

    public ComposicaoPk(Ingrediente ingrediente, Receita receita) {
        this.ingrediente = ingrediente;
        this.receita = receita;
    }

    public Ingrediente getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(Ingrediente ingrediente) {
        this.ingrediente = ingrediente;
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
        ComposicaoPk that = (ComposicaoPk) o;
        return Objects.equals(ingrediente, that.ingrediente) && Objects.equals(receita, that.receita);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ingrediente, receita);
    }
}
