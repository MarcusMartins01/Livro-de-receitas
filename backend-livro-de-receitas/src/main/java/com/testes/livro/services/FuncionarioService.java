package com.testes.livro.services;

import com.testes.livro.dtos.CargoDto;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.dtos.LivroDto;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Livro;
import com.testes.livro.entities.Usuario;
import com.testes.livro.enums.StatusFuncionario;
import com.testes.livro.exceptions.ObjectnotFoundException;
import com.testes.livro.repositories.CargoRepository;
import com.testes.livro.repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;
    @Autowired
    private  CargoService cargoService;
    @Autowired
    private UsuarioService usuarioService;

    public Funcionario findById(Integer id) {
        Optional<Funcionario> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectnotFoundException("Objeto não encontrado! ID: " + id));
    }

    public List<Funcionario> findAll() {
        return repository.findAll();
    }

    public Funcionario create(FuncionarioDto obj) {

        return repository.save(newFuncionario(obj));
    }

    public Funcionario update(Integer id, FuncionarioDto objDTO) {
        Funcionario oldObj = findById(id); // Retrieve the existing book
        oldObj = updateFuncionarioFromDto(oldObj, objDTO); // Update the existing book with new data
        return repository.save(oldObj); // Save the updated book
    }

    private Funcionario updateFuncionarioFromDto(Funcionario funcionario, FuncionarioDto obj) {
        Cargo cargo = cargoService.findById(obj.getCargo());
        Usuario usuario = usuarioService.buscarPorId(obj.getUsuario());
        // Set the properties of livro from livroDto
        funcionario.setSalario(obj.getSalario());
        funcionario.setNomeFantasia(obj.getNomeFantasia());
        funcionario.setCargo(cargo);
        funcionario.setUsuario(usuario);
        funcionario.setNome(obj.getNome());
        funcionario.setRg(obj.getRg());
        funcionario.setStatus(obj.getStatus());
        // Update other properties as needed
        return funcionario;
    }

    public void delete(Integer id) {
        Funcionario obj = findById(id);
        repository.deleteById(id);
    }

    private Funcionario newFuncionario(FuncionarioDto obj) {
        Cargo cargo = cargoService.findById(obj.getCargo());
        Usuario usuario = usuarioService.buscarPorId(obj.getUsuario());

        Funcionario chamado = new Funcionario();

        chamado.setSalario(obj.getSalario());
        chamado.setNomeFantasia(obj.getNomeFantasia());
        chamado.setCargo(cargo);
        chamado.setUsuario(usuario);
        chamado.setNome(obj.getNome());
        chamado.setRg(obj.getRg());
        chamado.setStatus(StatusFuncionario.ATIVO);
        return chamado;
    }


}
