package com.testes.livro.entities;

import com.testes.livro.dtos.PublicacaoLivroDto;
import com.testes.livro.entities.pks.PublicacaoLivroPk;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class PublicacaoLivro implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private PublicacaoLivroPk id = new PublicacaoLivroPk();

    public PublicacaoLivro() {}

    public PublicacaoLivro(PublicacaoLivroPk id) {
        this.id = id;
    }

    public PublicacaoLivro(PublicacaoLivroDto dto) {
        this.id = dto.getId();
    }

    public PublicacaoLivroPk getId() {
        return id;
    }

    public void setId(PublicacaoLivroPk id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PublicacaoLivro that = (PublicacaoLivro) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
