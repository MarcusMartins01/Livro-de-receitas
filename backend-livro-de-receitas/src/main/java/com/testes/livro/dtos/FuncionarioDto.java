package com.testes.livro.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.entities.Cargo;
import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Usuario;
import com.testes.livro.enums.StatusFuncionario;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.time.LocalDate;

public class FuncionarioDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer idFuncionario;
    @NotNull(message = "O campo NOME é requerido!")
    private String nome;
    @NotNull(message = "O campo RG é requerido!")
    private String rg;
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataIngresso = LocalDate.now();
    @NotNull(message = "O campo SALARIO é requerido!")
    private Double salario;
    private String descricaoCargo;
    private String nomeFantasia;
    private String descricaoUsuario;
    @NotNull(message = "O campo CARGO é requerido!")
    private Integer cargo;
    @NotNull(message = "O campo USUARIO é requerido!")
    private Long usuario;
    private StatusFuncionario status;

    public FuncionarioDto() {}

    public FuncionarioDto(Funcionario funcionario) {
        this.idFuncionario = funcionario.getIdFuncionario();
        this.nome = funcionario.getNome();
        this.rg = funcionario.getRg();
        this.dataIngresso = funcionario.getDataIngresso();
        this.salario = funcionario.getSalario();
        this.descricaoCargo = funcionario.getCargo().getDescricao();
        this.nomeFantasia = funcionario.getNomeFantasia();
        this.descricaoUsuario = funcionario.getUsuario().getUsername();
        this.cargo = funcionario.getCargo().getIdCargo();
        this.usuario = funcionario.getUsuario().getId();
        this.status = funcionario.getStatus();
    }

    public Integer getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(Integer idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public LocalDate getDataIngresso() {
        return dataIngresso;
    }

    public void setDataIngresso(LocalDate dataIngresso) {
        this.dataIngresso = dataIngresso;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public Integer getCargo() {
        return cargo;
    }

    public void setCargo(Integer cargo) {
        this.cargo = cargo;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public Long getUsuario() {
        return usuario;
    }

    public void setUsuario(Long usuario) {
        this.usuario = usuario;
    }

    public String getDescricaoCargo() {
        return descricaoCargo;
    }

    public void setDescricaoCargo(String descricaoCargo) {
        this.descricaoCargo = descricaoCargo;
    }

    public String getDescricaoUsuario() {
        return descricaoUsuario;
    }

    public void setDescricaoUsuario(String descricaoUsuario) {
        this.descricaoUsuario = descricaoUsuario;
    }

    public StatusFuncionario getStatus() {
        return status;
    }

    public void setStatus(StatusFuncionario status) {
        this.status = status;
    }
}
