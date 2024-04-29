package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.IngredienteDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Ingrediente;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.IngredienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredienteService {

    @Autowired
    private IngredienteRepository repository;

    public Ingrediente findById(Integer id) {
        Optional<Ingrediente> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Ingrediente> findAll() {
        return repository.findAll();
    }

    public Ingrediente create(IngredienteDto dto) {
        Ingrediente ingrediente = new Ingrediente(dto);
        return repository.save(ingrediente);
    }

    public Ingrediente update(Integer id, IngredienteDto objDTO) {
        objDTO.setIdIngrediente(id);
        Ingrediente oldObj = findById(id);
        oldObj = new Ingrediente(objDTO);
        return repository.save(oldObj);
    }

    public void delete(Integer id) {
        Ingrediente obj = findById(id);
        repository.deleteById(id);
    }


}
