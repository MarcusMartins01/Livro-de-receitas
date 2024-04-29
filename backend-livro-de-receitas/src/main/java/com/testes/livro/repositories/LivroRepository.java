package com.testes.livro.repositories;

import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, Integer> {
}
