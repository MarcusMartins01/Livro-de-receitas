package com.testes.livro.controllers;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.ParametroDto;
import com.testes.livro.dtos.ReferenciaDto;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Parametro;
import com.testes.livro.entities.Referencia;
import com.testes.livro.entities.Restaurante;
import com.testes.livro.entities.pks.ParametroPk;
import com.testes.livro.entities.pks.ReferenciaPk;
import com.testes.livro.services.ParametroService;
import com.testes.livro.services.ReferenciaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/parametros")
public class ParametroController {

    @Autowired
    private ParametroService service;

    @GetMapping
    public ResponseEntity<List<ParametroDto>> findAll() {
        List<Parametro> list = service.findAll();
        List<ParametroDto> listDto = list.stream().map(obj -> new ParametroDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @GetMapping(value = "/{idMes}_{idAno}")
    public ResponseEntity<ParametroDto> findById(@PathVariable Integer idMes, @PathVariable Integer idAno) {
        Parametro parametro = service.findById(new ParametroPk(idMes, idAno));
        return ResponseEntity.ok().body(new ParametroDto(parametro));
    }

    @PostMapping
    public ResponseEntity<ParametroDto> create(@Valid @RequestBody ParametroDto dto) {
        Parametro parametro = service.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(parametro.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{idMes}_{idAno}")
    public ResponseEntity<ParametroDto> update(@PathVariable Integer idMes, @PathVariable Integer idAno, @RequestBody ParametroDto objDTO) {
        Parametro obj = service.update(new ParametroPk(idMes, idAno), objDTO);
        return ResponseEntity.ok().body(new ParametroDto(obj));
    }

    @DeleteMapping(value = "/{idMes}_{idAno}")
    public ResponseEntity<ParametroDto> delete(@PathVariable Integer idMes, @PathVariable Integer idAno) {
        service.delete(new ParametroPk(idMes, idAno));
        return ResponseEntity.noContent().build();
    }



}
