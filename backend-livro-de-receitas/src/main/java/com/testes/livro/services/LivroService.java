package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.LivroDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Livro;
import com.testes.livro.entities.Usuario;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.FuncionarioRepository;
import com.testes.livro.repositories.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository repository;
    @Autowired
    private  FuncionarioService service;

    public Livro findById(Integer id) {
        Optional<Livro> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID: " + id));
    }

    public List<Livro> findAll() {
        return repository.findAll();
    }

    public Livro create(LivroDto obj) {
        return repository.save(newLivro(obj));
    }

    public Livro update(Integer id, LivroDto objDTO) {
        Livro oldObj = findById(id); // Retrieve the existing book
        oldObj = updateLivroFromDto(oldObj, objDTO); // Update the existing book with new data
        return repository.save(oldObj); // Save the updated book
    }

    private Livro updateLivroFromDto(Livro livro, LivroDto obj) {
        Funcionario funcionario = service.findById(obj.getEditor());
        // Set the properties of livro from livroDto
        livro.setTitulo(obj.getTitulo());
        livro.setIsbn(obj.getIsbn());
        livro.setFuncionario(funcionario);
        // Update other properties as needed
        return livro;
    }

    public void delete(Integer id) {
        Livro obj = findById(id);
        repository.deleteById(id);
    }

    private Livro newLivro(LivroDto obj) {
        Funcionario funcionario = service.findById(obj.getEditor());

        Livro chamado = new Livro();

        chamado.setTitulo(obj.getTitulo());
        chamado.setIsbn(obj.getIsbn());
        chamado.setFuncionario(funcionario);
        return chamado;
    }


}
