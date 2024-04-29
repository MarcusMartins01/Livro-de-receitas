package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.LivroDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Livro;
import com.testes.livro.services.FuncionarioService;
import com.testes.livro.services.LivroService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/livros")
public class LivroController {

    @Autowired
    private LivroService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<LivroDto> findById(@PathVariable Integer id) {
        Livro obj = service.findById(id);
        return ResponseEntity.ok().body(new LivroDto(obj));
    }

    @GetMapping
    public ResponseEntity<List<LivroDto>> findAll() {
        List<Livro> list = service.findAll();
        List<LivroDto> listDTO = list.stream().map(obj -> new LivroDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    @PostMapping
    public ResponseEntity<LivroDto> create(@Valid @RequestBody LivroDto obj) {
        Livro newObj = service.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getIdLivro()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<LivroDto> update(@PathVariable Integer id, @RequestBody LivroDto objDTO) {
        Livro obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new LivroDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<LivroDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
