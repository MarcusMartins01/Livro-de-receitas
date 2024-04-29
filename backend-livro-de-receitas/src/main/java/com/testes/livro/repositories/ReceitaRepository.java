package com.testes.livro.repositories;

import com.testes.livro.entities.Receita;
import com.testes.livro.entities.pks.ReceitaPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaRepository extends JpaRepository<Receita, ReceitaPk> {
}
