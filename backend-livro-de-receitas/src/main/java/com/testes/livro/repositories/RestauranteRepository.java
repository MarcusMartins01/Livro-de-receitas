package com.testes.livro.repositories;

import com.testes.livro.entities.Referencia;
import com.testes.livro.entities.Restaurante;
import com.testes.livro.entities.pks.ReferenciaPk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestauranteRepository extends JpaRepository<Restaurante, Integer> {
}
