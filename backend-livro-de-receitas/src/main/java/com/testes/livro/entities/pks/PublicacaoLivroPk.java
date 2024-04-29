package com.testes.livro.entities.pks;

import com.testes.livro.entities.Livro;
import com.testes.livro.entities.Receita;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PublicacaoLivroPk implements Serializable {
    private static final long serialVersionUID = 1L;
    @ManyToOne
    @JoinColumn(name = "livro_id")
    private Livro livro;
    @ManyToOne
    private Receita receita;

    public PublicacaoLivroPk() {
    }

    public PublicacaoLivroPk(Livro idNomeLivro, Receita receita) {
        this.livro = idNomeLivro;
        this.receita = receita;
    }


    public Livro getLivro() {
        return livro;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
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
        PublicacaoLivroPk that = (PublicacaoLivroPk) o;
        return Objects.equals(livro, that.livro) && Objects.equals(receita, that.receita);
    }

    @Override
    public int hashCode() {
        return Objects.hash(livro, receita);
    }
}
