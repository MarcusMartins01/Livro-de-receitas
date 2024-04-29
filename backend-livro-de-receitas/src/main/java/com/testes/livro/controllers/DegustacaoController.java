package com.testes.livro.controllers;

import com.testes.livro.dtos.DegustacaoDto;
import com.testes.livro.dtos.PublicacaoLivroDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.DegustacaoPk;
import com.testes.livro.entities.pks.PublicacaoLivroPk;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.services.DegustacaoService;
import com.testes.livro.services.FuncionarioService;
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
@RequestMapping(value = "/degustacoes")
public class DegustacaoController {

    @Autowired
    private DegustacaoService service;
    @Autowired
    private FuncionarioService funcionarioService;
    @Autowired
    private ReceitaService receitaService;

    @GetMapping
    public ResponseEntity<List<DegustacaoDto>> findAll() {
        List<Degustacao> list = service.findAll();
        List<DegustacaoDto> listDto = list.stream().map(obj -> new DegustacaoDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{idFuncionario}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<DegustacaoDto> findById(@PathVariable Funcionario idFuncionario, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita) {
        Funcionario funcionario = funcionarioService.findById(idFuncionario.getIdFuncionario());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        Degustacao degustacao = service.findById(new DegustacaoPk(funcionario, receita));
        return ResponseEntity.ok().body(new DegustacaoDto(degustacao));
    }

    @PostMapping
    public ResponseEntity<DegustacaoDto> create(@RequestBody DegustacaoDto dto) {
        Degustacao degustacao = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(degustacao.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{idFuncionario}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<DegustacaoDto> update(@PathVariable Funcionario idFuncionario, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita, @RequestBody DegustacaoDto objDTO) {
        Funcionario funcionario = funcionarioService.findById(idFuncionario.getIdFuncionario());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        Degustacao obj = service.update(new DegustacaoPk(funcionario, receita), objDTO);
        return ResponseEntity.ok().body(new DegustacaoDto(obj));
    }

    @DeleteMapping(value = "/{idFuncionario}_{idReceita}_{idFuncionarioReceita}")
    public ResponseEntity<DegustacaoDto> delete(@PathVariable Funcionario idFuncionario, @PathVariable String idReceita, @PathVariable Funcionario idFuncionarioReceita) {
        Funcionario funcionario = funcionarioService.findById(idFuncionario.getIdFuncionario());
        Receita receita = receitaService.findById(new ReceitaPk(idReceita, idFuncionarioReceita));
        service.delete(new DegustacaoPk(funcionario, receita));
        return ResponseEntity.noContent().build();
    }



}
