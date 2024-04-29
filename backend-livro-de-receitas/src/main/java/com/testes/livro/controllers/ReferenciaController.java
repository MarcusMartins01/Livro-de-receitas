package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.ReferenciaDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Referencia;
import com.testes.livro.entities.Restaurante;
import com.testes.livro.entities.pks.ReferenciaPk;
import com.testes.livro.services.CargoService;
import com.testes.livro.services.ReferenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/referencias")
public class ReferenciaController {

    @Autowired
    private ReferenciaService service;

    @GetMapping
    public ResponseEntity<List<ReferenciaDto>> findAll() {
        List<Referencia> list = service.findAll();
        List<ReferenciaDto> listDto = list.stream().map(obj -> new ReferenciaDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{idFuncionario}_{idRestaurante}")
    public ResponseEntity<ReferenciaDto> findById(@PathVariable Funcionario idFuncionario, @PathVariable Restaurante idRestaurante) {
        Referencia referencia = service.findById(new ReferenciaPk(idFuncionario, idRestaurante));
        return ResponseEntity.ok().body(new ReferenciaDto(referencia));
    }

    @PostMapping
    public ResponseEntity<ReferenciaDto> create(@RequestBody ReferenciaDto dto) {
        Referencia referencia = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(referencia.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{idFuncionario}_{idRestaurante}")
    public ResponseEntity<ReferenciaDto> update(@PathVariable Funcionario idFuncionario, @PathVariable Restaurante idRestaurante, @RequestBody ReferenciaDto objDTO) {
        Referencia obj = service.update(new ReferenciaPk(idFuncionario, idRestaurante), objDTO);
        return ResponseEntity.ok().body(new ReferenciaDto(obj));
    }

    @DeleteMapping(value = "/{idFuncionario}_{idRestaurante}")
    public ResponseEntity<ReferenciaDto> delete(@PathVariable Funcionario idFuncionario, @PathVariable Restaurante idRestaurante) {
        service.delete(new ReferenciaPk(idFuncionario, idRestaurante));
        return ResponseEntity.noContent().build();
    }



}
