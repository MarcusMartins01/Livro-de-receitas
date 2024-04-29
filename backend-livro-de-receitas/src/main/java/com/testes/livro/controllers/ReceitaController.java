package com.testes.livro.controllers;

import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.ReceitaDto;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Receita;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.repositories.ReceitaRepository;
import com.testes.livro.services.FuncionarioService;
import com.testes.livro.services.ReceitaService;
import com.testes.livro.utils.UploadUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/receitas")
public class ReceitaController {

    @Autowired
    private ReceitaService service;
    @Autowired
    private ReceitaRepository repo;

    @GetMapping(value = "/{idNome}_{idFuncionario}")
    public ResponseEntity<ReceitaDto> findById(@PathVariable String idNome, @PathVariable Funcionario idFuncionario) {
        Receita obj = service.findById(new ReceitaPk(idNome, idFuncionario));
        return ResponseEntity.ok().body(new ReceitaDto(obj));
    }

    @GetMapping
    public ResponseEntity<List<ReceitaDto>> findAll() {
        List<Receita> list = service.findAll();
        List<ReceitaDto> listDTO = list.stream().map(obj -> new ReceitaDto(obj)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDTO);
    }

    /*@PostMapping
    public ResponseEntity<ReceitaDto> create(@Valid @RequestBody ReceitaDto obj) {
        Receita newObj = service.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }*/

    @PostMapping
    public ResponseEntity<Receita> create(@RequestBody Receita receita, @RequestParam("file") MultipartFile imagem) {
        try {
            if (UploadUtil.fazerUploadImagem(imagem)) {
                receita.setImagem(imagem.getOriginalFilename());
            }
            Receita newObj = repo.save(receita);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
            return ResponseEntity.created(uri).build();
        }
        catch (Exception e) {
            return (ResponseEntity<Receita>) ResponseEntity.badRequest();
        }
    }


    @PutMapping(value = "/{idNome}_{idFuncionario}")
    public ResponseEntity<ReceitaDto> update(@PathVariable String idNome, @PathVariable Funcionario idFuncionario, @RequestBody ReceitaDto objDTO) {
        Receita newObj = service.update(new ReceitaPk(idNome, idFuncionario), objDTO);
        return ResponseEntity.ok().body(new ReceitaDto(newObj));
    }

    @DeleteMapping(value = "/{idNome}_{idFuncionario}")
    public ResponseEntity<ReceitaDto> delete(@PathVariable String idNome, @PathVariable Funcionario idFuncionario) {
        service.delete(new ReceitaPk(idNome, idFuncionario));
        return ResponseEntity.noContent().build();
    }
}
