package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.DegustacaoDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Degustacao;
import com.testes.livro.entities.pks.DegustacaoPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.DegustacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DegustacaoService {

    @Autowired
    private DegustacaoRepository repository;

    public Degustacao findById(DegustacaoPk id) {
        Optional<Degustacao> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<Degustacao> findAll() {
        return repository.findAll();
    }

    public Degustacao create(DegustacaoDto dto) {
        Degustacao degustacao = new Degustacao(dto);
        return repository.save(degustacao);
    }

    public Degustacao update(DegustacaoPk id, DegustacaoDto objDTO) {
        objDTO.setId(id);
        Degustacao oldObj = findById(id);
        oldObj = new Degustacao(objDTO);
        return repository.save(oldObj);
    }

    public void delete(DegustacaoPk id) {
        Degustacao obj = findById(id);
        repository.deleteById(id);
    }


}
