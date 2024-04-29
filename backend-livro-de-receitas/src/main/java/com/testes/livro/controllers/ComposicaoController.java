package com.testes.livro.controllers;

import com.testes.livro.dtos.ComposicaoDto;
import com.testes.livro.dtos.DegustacaoDto;
import com.testes.livro.dtos.ReceitaDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.ComposicaoPk;
import com.testes.livro.entities.pks.DegustacaoPk;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/composicoes")
public class ComposicaoController {

    @Autowired
    private ComposicaoService service;
    @Autowired
    private ReceitaService receitaService;
    @Autowired
    private IngredienteService ingredienteService;

    @GetMapping
    public ResponseEntity<List<ComposicaoDto>> findAll() {
        List<Composicao> list = service.findAll();
        List<ComposicaoDto> listDto = list.stream().map(obj -> new ComposicaoDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{idIngrediente}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<ComposicaoDto> findById(@PathVariable Ingrediente idIngrediente, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita) {
        Ingrediente ingrediente = ingredienteService.findById(idIngrediente.getIdIngrediente());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        Composicao composicao = service.findById(new ComposicaoPk(ingrediente, receita));
        return ResponseEntity.ok().body(new ComposicaoDto(composicao));
    }

    @PostMapping
    public ResponseEntity<ComposicaoDto> create(@RequestBody ComposicaoDto dto) {
        Composicao composicao = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(composicao.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{idIngrediente}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<ComposicaoDto> update(@PathVariable Ingrediente idIngrediente, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita, @RequestBody ComposicaoDto objDTO) {
        Ingrediente ingrediente = ingredienteService.findById(idIngrediente.getIdIngrediente());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        Composicao obj = service.update(new ComposicaoPk(ingrediente, receita), objDTO);
        return ResponseEntity.ok().body(new ComposicaoDto(obj));
    }

    @DeleteMapping(value = "/{idIngrediente}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<ComposicaoDto> delete(@PathVariable Ingrediente idIngrediente, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita) {
        Ingrediente ingrediente = ingredienteService.findById(idIngrediente.getIdIngrediente());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        service.delete(new ComposicaoPk(ingrediente, receita));
        return ResponseEntity.noContent().build();
    }



}
