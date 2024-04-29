package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.ReferenciaDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.ReferenciaPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.ReferenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReferenciaService {

    @Autowired
    private ReferenciaRepository repository;

    public Referencia findById(ReferenciaPk id) {
        Optional<Referencia> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Referencia> findAll() {
        return repository.findAll();
    }

    public Referencia create(ReferenciaDto dto) {
        Referencia cargo = new Referencia(dto);
        return repository.save(cargo);
    }

    public Referencia update(ReferenciaPk id, ReferenciaDto objDTO) {
        objDTO.setId(id);
        Referencia oldObj = findById(id);
        oldObj = new Referencia(objDTO);
        return repository.save(oldObj);
    }

    public void delete(ReferenciaPk id) {
        Referencia obj = findById(id);
        repository.deleteById(id);
    }


}
