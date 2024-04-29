package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.services.FuncionarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<FuncionarioDto> findById(@PathVariable Integer id) {
        Funcionario obj = service.findById(id);
        return ResponseEntity.ok().body(new FuncionarioDto(obj));
    }

    @GetMapping
    public ResponseEntity<List<FuncionarioDto>> findAll() {
        List<Funcionario> list = service.findAll();
        List<FuncionarioDto> listDTO = list.stream().map(obj -> new FuncionarioDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<FuncionarioDto> create(@Valid @RequestBody FuncionarioDto obj) {
        Funcionario newObj = service.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getIdFuncionario()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<FuncionarioDto> update(@PathVariable Integer id, @RequestBody FuncionarioDto objDTO) {
        Funcionario newObj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new FuncionarioDto(newObj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<FuncionarioDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
