package com.testes.livro.services;

import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.ReceitaDto;
import com.testes.livro.dtos.ReferenciaDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.entities.pks.ReferenciaPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.exceptions.ReceitaExistenteException;
import com.testes.livro.repositories.ReceitaRepository;
import com.testes.livro.repositories.ReferenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@Service
public class ReceitaService {

    @Autowired
    private ReceitaRepository repository;
    @Autowired
    private CategoriaService service;

    public Receita findById(ReceitaPk id) {
        Optional<Receita> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID: " + id));
    }

    public List<Receita> findAll() {
        return repository.findAll();
    }

    public Receita create(ReceitaDto obj) {
        return repository.save(newReceita(obj));
    }
    /*public Receita salvarReceita(Receita receita) {
        return repository.save(receita);
    }*/

    public Receita update(ReceitaPk id, ReceitaDto objDTO) {
        Receita oldObj = findById(id); // Retrieve the existing book
        oldObj = updateReceitaFromDto(oldObj, objDTO); // Update the existing book with new data
        return repository.save(oldObj); // Save the updated book
    }

    private Receita updateReceitaFromDto(Receita receita, ReceitaDto obj) {
        Categoria categoria = service.findById(obj.getCategoria());
        String nome = obj.getId().getNome();
        Funcionario funcionario = obj.getId().getFuncionario();
        // Set the properties of livro from livroDto
        receita.setId(new ReceitaPk(nome, funcionario));
        receita.setCategoria(categoria);
        receita.setModoPreparo(obj.getModoPreparo());
        receita.setQtdPorcao(obj.getQtdPorcao());
        receita.setIndInedita(obj.getIndInedita());
        // Update other properties as needed
        return receita;
    }

    public void delete(ReceitaPk id) {
        Receita obj = findById(id);
        repository.deleteById(id);
    }

    private Receita newReceita(ReceitaDto obj) {
        Categoria categoria = service.findById(obj.getCategoria());
        Receita receita = new Receita();

        String nome = obj.getId().getNome();
        Funcionario funcionario = obj.getId().getFuncionario();

        if (repository.findById(new ReceitaPk(nome, funcionario)).isEmpty()) {
            receita.setId(new ReceitaPk(nome, funcionario));
            receita.setCategoria(categoria);
            receita.setModoPreparo(obj.getModoPreparo());
            receita.setQtdPorcao(obj.getQtdPorcao());
            receita.setIndInedita(obj.getIndInedita());
            receita.setImagem(obj.getImagem());
        }
        else {
            throw new ReceitaExistenteException("Você já inseriu uma receita com esse nome!!!");
        }
        return receita;
    }



}
