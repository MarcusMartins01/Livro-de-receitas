package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.CategoriaDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Categoria;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public Categoria findById(Integer id) {
        Optional<Categoria> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Categoria> findAll() {
        return repository.findAll();
    }

    public Categoria create(CategoriaDto dto) {
        Categoria categoria = new Categoria(dto);
        return repository.save(categoria);
    }

    public Categoria update(Integer id, CategoriaDto objDTO) {
        objDTO.setIdCategoria(id);
        Categoria oldObj = findById(id);
        oldObj = new Categoria(objDTO);
        return repository.save(oldObj);
    }

    public void delete(Integer id) {
        Categoria obj = findById(id);
        repository.deleteById(id);
    }


}
