package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Ingrediente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredienteRepository extends JpaRepository<Ingrediente, Integer> {
}
