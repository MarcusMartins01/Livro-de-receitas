package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.services.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/cargos")
public class CargoController {

    @Autowired
    private CargoService service;

    @GetMapping
    public ResponseEntity<List<CargoDto>> findAll() {
        List<Cargo> list = service.findAll();
        List<CargoDto> listDto = list.stream().map(obj -> new CargoDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CargoDto> findById(@PathVariable Integer id) {
        Cargo cargo = service.findById(id);
        return ResponseEntity.ok().body(new CargoDto(cargo));
    }

    @PostMapping
    public ResponseEntity<CargoDto> create(@RequestBody CargoDto dto) {
        Cargo cargo = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cargo.getIdCargo()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CargoDto> update(@PathVariable Integer id, @RequestBody CargoDto objDTO) {
        Cargo obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new CargoDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<CargoDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
