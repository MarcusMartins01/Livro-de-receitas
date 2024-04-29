package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.CategoriaDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Categoria;
import com.testes.livro.services.CargoService;
import com.testes.livro.services.CategoriaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<CategoriaDto>> findAll() {
        List<Categoria> list = service.findAll();
        List<CategoriaDto> listDto = list.stream().map(obj -> new CategoriaDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoriaDto> findById(@PathVariable Integer id) {
        Categoria categoria = service.findById(id);
        return ResponseEntity.ok().body(new CategoriaDto(categoria));
    }

    @PostMapping
    public ResponseEntity<CategoriaDto> create(@Valid  @RequestBody CategoriaDto dto) {
        Categoria cargo = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cargo.getIdCategoria()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CategoriaDto> update(@PathVariable Integer id, @RequestBody CategoriaDto objDTO) {
        Categoria obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new CategoriaDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<CategoriaDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
