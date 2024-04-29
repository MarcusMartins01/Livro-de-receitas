package com.testes.livro.entities.pks;

import com.testes.livro.entities.Funcionario;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.Objects;

@Embeddable
public class ReceitaPk {

    private String nome;
    @ManyToOne
    @JoinColumn(name = "funcionario_id")
    private Funcionario funcionario;

    public ReceitaPk() {
    }

    public ReceitaPk(String nome, Funcionario funcionario) {
        this.nome = nome;
        this.funcionario = funcionario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReceitaPk receitaPk = (ReceitaPk) o;
        return Objects.equals(nome, receitaPk.nome) && Objects.equals(funcionario, receitaPk.funcionario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, funcionario);
    }
}
