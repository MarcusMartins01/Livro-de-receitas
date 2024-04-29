package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Referencia;
import com.testes.livro.entities.pks.ReferenciaPk;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReferenciaRepository extends JpaRepository<Referencia, ReferenciaPk> {

}
