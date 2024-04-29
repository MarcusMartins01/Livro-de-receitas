package com.testes.livro.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.entities.Categoria;
import com.testes.livro.entities.Receita;
import com.testes.livro.entities.pks.ReceitaPk;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.time.LocalDate;

public class ReceitaDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private ReceitaPk id = new ReceitaPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCriacao = LocalDate.now();
    private String descricaoCategoria;
    @NotNull(message = "O campo CATEGORIA é requerido!")
    private Integer categoria;
    @NotNull(message = "O campo MODO_PREPARO é requerido!")
    private String modoPreparo;
    private Integer qtdPorcao;
    @NotNull(message = "O campo IND_INEDITA é requerido!")
    private Integer indInedita;
    private String imagem;

    public ReceitaDto() {}

    public ReceitaDto(Receita receita) {
        this.id = receita.getId();
        this.dataCriacao = receita.getDataCriacao();
        this.descricaoCategoria = receita.getCategoria().getDescricao();
        this.categoria = receita.getCategoria().getIdCategoria();
        this.modoPreparo = receita.getModoPreparo();
        this.qtdPorcao = receita.getQtdPorcao();
        this.indInedita = receita.getIndInedita();
        this.imagem = receita.getImagem();
    }

    public ReceitaPk getId() {
        return id;
    }

    public void setId(ReceitaPk id) {
        this.id = id;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public String getDescricao() {
        return descricaoCategoria;
    }

    public void setDescricao(String descricao) {
        this.descricaoCategoria = descricao;
    }

    public Integer getCategoria() {
        return categoria;
    }

    public void setCategoria(Integer categoria) {
        this.categoria = categoria;
    }

    public String getModoPreparo() {
        return modoPreparo;
    }

    public void setModoPreparo(String modoPreparo) {
        this.modoPreparo = modoPreparo;
    }

    public Integer getQtdPorcao() {
        return qtdPorcao;
    }

    public void setQtdPorcao(Integer qtdPorcao) {
        this.qtdPorcao = qtdPorcao;
    }

    public Integer getIndInedita() {
        return indInedita;
    }

    public void setIndInedita(Integer indInedita) {
        this.indInedita = indInedita;
    }

    public String getDescricaoCategoria() {
        return descricaoCategoria;
    }

    public void setDescricaoCategoria(String descricaoCategoria) {
        this.descricaoCategoria = descricaoCategoria;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}
