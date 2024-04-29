package com.testes.livro.services;

import com.testes.livro.dtos.ComposicaoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.ReceitaDto;
import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.ComposicaoPk;
import com.testes.livro.entities.pks.ReceitaPk;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.ComposicaoRepository;
import com.testes.livro.repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComposicaoService {

    @Autowired
    private ComposicaoRepository repository;
    @Autowired
    private MedidaService service;
    @Autowired
    private IngredienteService ingredienteService;
    @Autowired
    private ReceitaService receitaService;
    @Autowired
    private CategoriaService categoriaService;

    public Composicao findById(ComposicaoPk id) {
        Optional<Composicao> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID: " + id));
    }

    public List<Composicao> findAll() {
        return repository.findAll();
    }

    public Composicao create(ComposicaoDto obj) {
        return repository.save(newComposicao(obj));
    }

    public Composicao update(ComposicaoPk id, ComposicaoDto objDTO) {
        Composicao oldObj = findById(id);
        oldObj = updateComposicaoFromDto(oldObj, objDTO);
        return repository.save(oldObj);
    }

    private Composicao updateComposicaoFromDto(Composicao composicao, ComposicaoDto obj) {
        Medida medida = service.findById(obj.getMedida());
        Ingrediente ingrediente = ingredienteService.findById(obj.getId().getIngrediente().getIdIngrediente());
        Receita nomeReceita = receitaService.findById(new ReceitaPk(obj.getId().getReceita().getId().getNome(), obj.getId().getReceita().getId().getFuncionario()));


        composicao.setId(new ComposicaoPk(ingrediente, nomeReceita));
        composicao.setMedida(medida);
        composicao.setQtdMedida(obj.getQtdMedida());
        return composicao;
    }

    public void delete(ComposicaoPk id) {
        Composicao obj = findById(id);
        repository.deleteById(id);
    }

    private Composicao newComposicao(ComposicaoDto obj) {
        Medida medida = service.findById(obj.getMedida());
        Ingrediente ingrediente = ingredienteService.findById(obj.getId().getIngrediente().getIdIngrediente());
        Receita nomeReceita = receitaService.findById(obj.getId().getReceita().getId());
        Composicao composicao = new Composicao();
        composicao.setId(new ComposicaoPk(ingrediente, nomeReceita));
        composicao.setMedida(medida);
        composicao.setQtdMedida(obj.getQtdMedida());
        return composicao;
    }

}
