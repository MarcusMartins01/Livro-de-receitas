package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.MedidaDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Medida;
import com.testes.livro.services.CargoService;
import com.testes.livro.services.MedidaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/medidas")
public class MedidaController {

    @Autowired
    private MedidaService service;

    @GetMapping
    public ResponseEntity<List<MedidaDto>> findAll() {
        List<Medida> list = service.findAll();
        List<MedidaDto> listDto = list.stream().map(obj -> new MedidaDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MedidaDto> findById(@PathVariable Integer id) {
        Medida medida = service.findById(id);
        return ResponseEntity.ok().body(new MedidaDto(medida));
    }

    @PostMapping
    public ResponseEntity<MedidaDto> create(@Valid @RequestBody MedidaDto dto) {
        Medida cargo = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cargo.getIdMedida()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<MedidaDto> update(@PathVariable Integer id, @RequestBody MedidaDto objDTO) {
        Medida obj = service.update(id, objDTO);
        return ResponseEntity.ok().body(new MedidaDto(obj));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<MedidaDto> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
