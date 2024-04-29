package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.MedidaDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Medida;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.MedidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedidaService {

    @Autowired
    private MedidaRepository repository;

    public Medida findById(Integer id) {
        Optional<Medida> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Medida> findAll() {
        return repository.findAll();
    }

    public Medida create(MedidaDto dto) {
        Medida medida = new Medida(dto);
        return repository.save(medida);
    }

    public Medida update(Integer id, MedidaDto objDTO) {
        objDTO.setIdMedida(id);
        Medida oldObj = findById(id);
        oldObj = new Medida(objDTO);
        return repository.save(oldObj);
    }

    public void delete(Integer id) {
        Medida obj = findById(id);
        repository.deleteById(id);
    }


}
