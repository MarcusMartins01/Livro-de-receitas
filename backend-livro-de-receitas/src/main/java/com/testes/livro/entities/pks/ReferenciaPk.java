package com.testes.livro.entities.pks;

import com.testes.livro.entities.Funcionario;
import com.testes.livro.entities.Restaurante;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.Objects;

@Embeddable
public class ReferenciaPk {

    @ManyToOne
    @JoinColumn(name = "cozinheiro_id")
    private Funcionario funcionario;
    @ManyToOne
    @JoinColumn(name = "restaurante_id")
    private Restaurante restaurante;

    public ReferenciaPk() {
    }

    public ReferenciaPk(Funcionario funcionario, Restaurante restaurante) {
        this.funcionario = funcionario;
        this.restaurante = restaurante;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public void setRestaurante(Restaurante restaurante) {
        this.restaurante = restaurante;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReferenciaPk that = (ReferenciaPk) o;
        return Objects.equals(funcionario, that.funcionario) && Objects.equals(restaurante, that.restaurante);
    }

    @Override
    public int hashCode() {
        return Objects.hash(funcionario, restaurante);
    }
}
