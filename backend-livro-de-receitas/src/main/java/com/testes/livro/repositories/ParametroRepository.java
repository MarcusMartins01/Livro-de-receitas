package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Parametro;
import com.testes.livro.entities.pks.ParametroPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParametroRepository extends JpaRepository<Parametro, ParametroPk> {
}
