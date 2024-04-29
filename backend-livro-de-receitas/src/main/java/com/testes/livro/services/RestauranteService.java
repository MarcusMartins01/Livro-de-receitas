package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.RestauranteDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Restaurante;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.RestauranteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository repository;

    public Restaurante findById(Integer id) {
        Optional<Restaurante> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Restaurante> findAll() {
        return repository.findAll();
    }

    public Restaurante create(RestauranteDto dto) {
        Restaurante cargo = new Restaurante(dto);
        return repository.save(cargo);
    }

    public Restaurante update(Integer id, RestauranteDto objDTO) {
        objDTO.setIdRestaurante(id);
        Restaurante oldObj = findById(id);
        oldObj = new Restaurante(objDTO);
        return repository.save(oldObj);
    }

    public void delete(Integer id) {
        Restaurante obj = findById(id);
        repository.deleteById(id);
    }


}
