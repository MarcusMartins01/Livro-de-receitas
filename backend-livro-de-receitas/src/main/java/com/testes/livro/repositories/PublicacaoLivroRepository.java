package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.PublicacaoLivro;
import com.testes.livro.entities.pks.PublicacaoLivroPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicacaoLivroRepository extends JpaRepository<PublicacaoLivro, PublicacaoLivroPk> {
}
