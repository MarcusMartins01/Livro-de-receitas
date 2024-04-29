package com.testes.livro.controllers;

import com.testes.livro.dtos.ParametroDto;
import com.testes.livro.dtos.PublicacaoLivroDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.ParametroPk;
import com.testes.livro.entities.pks.PublicacaoLivroPk;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.services.LivroService;
import com.testes.livro.services.ParametroService;
import com.testes.livro.services.PublicacaoLivroService;
import com.testes.livro.services.ReceitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/publicacoes")
public class PublicacaoLivroController {

    @Autowired
    private PublicacaoLivroService service;
    @Autowired
    private LivroService livroService;
    @Autowired
    private ReceitaService receitaService;

    @GetMapping
    public ResponseEntity<List<PublicacaoLivroDto>> findAll() {
        List<PublicacaoLivro> list = service.findAll();
        List<PublicacaoLivroDto> listDto = list.stream().map(obj -> new PublicacaoLivroDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{idLivro}_{idReceita}_{idFuncionario}")
    public ResponseEntity<PublicacaoLivroDto> findById(@PathVariable Livro idLivro, @PathVariable String idReceita, @PathVariable Funcionario idFuncionario) {
        Livro livro = livroService.findById(idLivro.getIdLivro());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionario));
        PublicacaoLivro obj = service.findById(new PublicacaoLivroPk(livro, receita));
        return ResponseEntity.ok().body(new PublicacaoLivroDto(obj));
    }

    @PostMapping
    public ResponseEntity<PublicacaoLivroDto> create(@RequestBody PublicacaoLivroDto dto) {
        PublicacaoLivro parametro = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(parametro.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{idLivro}_{idReceita}_{idFuncionario}")
    public ResponseEntity<PublicacaoLivroDto> update(@PathVariable Livro idLivro, @PathVariable String idReceita, @PathVariable Funcionario idFuncionario, @RequestBody PublicacaoLivroDto objDTO) {
        Livro livro = livroService.findById(idLivro.getIdLivro());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionario));
        PublicacaoLivro obj = service.update(new PublicacaoLivroPk(livro, receita), objDTO);
        return ResponseEntity.ok().body(new PublicacaoLivroDto(obj));
    }

    @DeleteMapping(value = "/{idLivro}_{idReceita}_{idFuncionario}")
    public ResponseEntity<PublicacaoLivroDto> delete(@PathVariable Livro idLivro, @PathVariable String idReceita, @PathVariable Funcionario idFuncionario) {
        Livro livro = livroService.findById(idLivro.getIdLivro());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionario));
        service.delete(new PublicacaoLivroPk(livro, receita));
        return ResponseEntity.noContent().build();
    }



}
