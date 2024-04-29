package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.RestauranteDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Restaurante;
import com.testes.livro.services.CargoService;
import com.testes.livro.services.RestauranteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/restaurantes")
public class RestauranteController {

    @Autowired
    private RestauranteService service;

    @GetMapping
    public ResponseEntity<List<RestauranteDto>> findAll() {
        List<Restaurante> list = service.findAll();
        List<RestauranteDto> listDto = list.stream().map(obj -> new RestauranteDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<RestauranteDto> findById(@PathVariable Integer id) {
        Restaurante restaurante = service.findById(id);
        return ResponseEntity.ok().body(new RestauranteDto(restaurante));
    }

    @PostMapping
    public ResponseEntity<RestauranteDto> create(@Valid @RequestBody RestauranteDto dto) {
        Restaurante restaurante = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(restaurante.getIdRestaurante()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<RestauranteDto> update(@PathVariable Integer id, @RequestBody RestauranteDto objDTO) {
        Restaurante obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new RestauranteDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<RestauranteDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
