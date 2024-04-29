package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CargoService {

    @Autowired
    private CargoRepository cargoRepository;

    public Cargo findById(Integer id) {
        Optional<Cargo> obj = cargoRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Cargo> findAll() {
        return cargoRepository.findAll();
    }

    public Cargo create(CargoDto dto) {
        Cargo cargo = new Cargo(dto);
        return cargoRepository.save(cargo);
    }

    public Cargo update(Integer id, CargoDto objDTO) {
        objDTO.setIdCargo(id);
        Cargo oldObj = findById(id);
        oldObj = new Cargo(objDTO);
        return cargoRepository.save(oldObj);
    }

    public void delete(Integer id) {
        Cargo obj = findById(id);
        cargoRepository.deleteById(id);
    }


}
