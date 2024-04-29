package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.IngredienteDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Ingrediente;
import com.testes.livro.services.CargoService;
import com.testes.livro.services.IngredienteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/ingredientes")
public class IngredienteController {

    @Autowired
    private IngredienteService service;

    @GetMapping
    public ResponseEntity<List<IngredienteDto>> findAll() {
        List<Ingrediente> list = service.findAll();
        List<IngredienteDto> listDto = list.stream().map(obj -> new IngredienteDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<IngredienteDto> findById(@PathVariable Integer id) {
        Ingrediente ingrediente = service.findById(id);
        return ResponseEntity.ok().body(new IngredienteDto(ingrediente));
    }

    @PostMapping
    public ResponseEntity<IngredienteDto> create(@Valid @RequestBody IngredienteDto dto) {
        Ingrediente ingrediente = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ingrediente.getIdIngrediente()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<IngredienteDto> update(@PathVariable Integer id, @RequestBody IngredienteDto objDTO) {
        Ingrediente obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new IngredienteDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<IngredienteDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
