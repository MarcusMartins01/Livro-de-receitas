package com.testes.livro.repositories;

import com.testes.livro.entities.Composicao;
import com.testes.livro.entities.Degustacao;
import com.testes.livro.entities.pks.ComposicaoPk;
import com.testes.livro.entities.pks.DegustacaoPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DegustacaoRepository extends JpaRepository<Degustacao, DegustacaoPk> {
}
