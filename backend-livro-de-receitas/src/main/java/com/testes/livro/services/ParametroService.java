package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.ParametroDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Parametro;
import com.testes.livro.entities.pks.ParametroPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.ParametroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParametroService {

    @Autowired
    private ParametroRepository repository;

    public Parametro findById(ParametroPk id) {
        Optional<Parametro> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Parametro> findAll() {
        return repository.findAll();
    }

    public Parametro create(ParametroDto dto) {
        Parametro parametro = new Parametro(dto);
        return repository.save(parametro);
    }

    public Parametro update(ParametroPk id, ParametroDto objDTO) {
        objDTO.setId(id);
        Parametro oldObj = findById(id);
        oldObj = new Parametro(objDTO);
        return repository.save(oldObj);
    }

    public void delete(ParametroPk id) {
        Parametro obj = findById(id);
        repository.deleteById(id);
    }


}
