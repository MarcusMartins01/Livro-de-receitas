package com.testes.livro.services;

import com.testes.livro.dtos.PublicacaoLivroDto;
import com.testes.livro.entities.PublicacaoLivro;
import com.testes.livro.entities.pks.PublicacaoLivroPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.PublicacaoLivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublicacaoLivroService {

    @Autowired
    private PublicacaoLivroRepository repository;

    public PublicacaoLivro findById(PublicacaoLivroPk id) {
        Optional<PublicacaoLivro> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! Id: " + id));
    }

    public List<PublicacaoLivro> findAll() {
        return repository.findAll();
    }

    public PublicacaoLivro create(PublicacaoLivroDto dto) {
        PublicacaoLivro livroPb = new PublicacaoLivro(dto);
        return repository.save(livroPb);
    }

    public PublicacaoLivro update(PublicacaoLivroPk id, PublicacaoLivroDto objDTO) {
        objDTO.setId(id);
        PublicacaoLivro oldObj = findById(id);
        oldObj = new PublicacaoLivro(objDTO);
        return repository.save(oldObj);
    }

    public void delete(PublicacaoLivroPk id) {
        PublicacaoLivro obj = findById(id);
        repository.deleteById(id);
    }


}
