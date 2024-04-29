package com.testes.livro.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.dtos.FuncionarioDto;
import com.testes.livro.enums.StatusFuncionario;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Funcionario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idFuncionario;

    private String nome;
    @Column(unique = true)
    private String rg;
    @JsonFormat(pattern = "dd/MM/yyyy")
    protected LocalDate dataIngresso = LocalDate.now();
    private Double salario;
    @ManyToOne
    @JoinColumn(name = "cargo_id")
    private Cargo cargo;
    private String nomeFantasia;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    @Enumerated(EnumType.STRING)
    private StatusFuncionario status;

    public Funcionario() {}

    public Funcionario(Integer idFuncionario,
                       String nome,
                       String rg,
                       Double salario,
                       Cargo cargo,
                       String nomeFantasia,
                       Usuario usuario,
                       StatusFuncionario status) {
        this.idFuncionario = idFuncionario;
        this.nome = nome;
        this.rg = rg;
        this.salario = salario;
        this.cargo = cargo;
        this.nomeFantasia = nomeFantasia;
        this.usuario = usuario;
        this.status = StatusFuncionario.valueOf(status.getDescricao());
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

    public void setData_Ingresso(LocalDate data_Ingresso) {
        this.dataIngresso = data_Ingresso;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public Cargo getCargo() {
        return cargo;
    }

    public void setCargo(Cargo cargo) {
        this.cargo = cargo;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public StatusFuncionario getStatus() {
        return status;
    }

    public void setStatus(StatusFuncionario status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Funcionario that = (Funcionario) o;
        return Objects.equals(idFuncionario, that.idFuncionario) && Objects.equals(nome, that.nome) && Objects.equals(rg, that.rg) && Objects.equals(dataIngresso, that.dataIngresso) && Objects.equals(salario, that.salario) && Objects.equals(cargo, that.cargo) && Objects.equals(nomeFantasia, that.nomeFantasia) && Objects.equals(usuario, that.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idFuncionario, nome, rg, dataIngresso, salario, cargo, nomeFantasia, usuario);
    }
}
