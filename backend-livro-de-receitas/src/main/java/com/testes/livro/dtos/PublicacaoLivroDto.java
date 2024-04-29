package com.testes.livro.dtos;

import com.testes.livro.entities.PublicacaoLivro;
import com.testes.livro.entities.pks.ParametroPk;
import com.testes.livro.entities.pks.PublicacaoLivroPk;

import java.io.Serializable;

public class PublicacaoLivroDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private PublicacaoLivroPk id = new PublicacaoLivroPk();
    private String nomeLivro;

    public PublicacaoLivroDto() {}

    public PublicacaoLivroDto(PublicacaoLivro publicacaoLivro) {
        this.id = publicacaoLivro.getId();
        this.nomeLivro = publicacaoLivro.getId().getLivro().getTitulo();
    }

    public PublicacaoLivroPk getId() {
        return id;
    }

    public void setId(PublicacaoLivroPk id) {
        this.id = id;
    }
}
