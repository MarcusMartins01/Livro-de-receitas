package com.testes.livro.repositories;

import com.testes.livro.entities.Composicao;
import com.testes.livro.entities.pks.ComposicaoPk;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ComposicaoRepository extends JpaRepository<Composicao, ComposicaoPk> {

}
