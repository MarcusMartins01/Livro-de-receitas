package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
