package com.testes.livro.enums;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


public enum Perfil {

    ADMIN(0, "ROLE_ADMIN"),
    COZINHEIRO(1, "ROLE_COZINHEIRO"),
    DEGUSTADOR(2, "ROLE_DEGUSTADOR"),
    EDITOR(3, "ROLE_EDITOR");

    private Integer codigo;
    private String descricao;

    private Perfil(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public static Perfil fromDescricao(String descricao) {
        for (Perfil perfil : Perfil.values()) {
            if (perfil.getDescricao().equals(descricao)) {
                return perfil;
            }
        }
        throw new IllegalArgumentException("Unknown description: " + descricao);
    }

    public static Perfil toEnum(Integer cod) {
        if(cod == null) {
            return null;
        }

        for(Perfil x : Perfil.values()) {
            if(cod.equals(x.getCodigo())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Perfil inválido");
    }
}
