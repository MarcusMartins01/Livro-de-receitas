package com.testes.livro.enums;

public enum StatusFuncionario {
    ATIVO(0, "ATIVO"), NAO_ATIVO(1, "NAO_ATIVO");

    private Integer codigo;
    private String descricao;

    StatusFuncionario(Integer codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public static StatusFuncionario fromDescricao(String descricao) {
        for (StatusFuncionario status : StatusFuncionario.values()) {
            if (status.getDescricao().equals(descricao)) {
                return status;
            }
        }
        throw new IllegalArgumentException("Unknown description: " + descricao);
    }

    public static StatusFuncionario toEnum(Integer cod) {
        if(cod == null) {
            return null;
        }

        for(StatusFuncionario x : StatusFuncionario.values()) {
            if(cod.equals(x.getCodigo())) {
                return x;
            }
        }

        throw new IllegalArgumentException("Perfil inválido");
    }
}
