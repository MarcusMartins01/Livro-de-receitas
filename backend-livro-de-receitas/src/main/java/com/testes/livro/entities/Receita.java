package com.testes.livro.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.testes.livro.dtos.ReceitaDto;
import com.testes.livro.entities.pks.ReceitaPk;
import jakarta.persistence.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Receita implements Serializable {
    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private ReceitaPk id = new ReceitaPk();
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCriacao = LocalDate.now();
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    private String modoPreparo;
    private Integer qtdPorcao;
    private Integer indInedita;
    @Lob
    private String imagem;

    public Receita() {}

    public Receita(ReceitaPk id, Categoria categoria, String modoPreparo, Integer qtdPorcao, Integer indInedita, String imagem) {
        this.id = id;
        this.categoria = categoria;
        this.modoPreparo = modoPreparo;
        this.qtdPorcao = qtdPorcao;
        this.indInedita = indInedita;
        this.imagem = imagem;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Receita receita = (Receita) o;
        return Objects.equals(id, receita.id) && Objects.equals(dataCriacao, receita.dataCriacao) && Objects.equals(categoria, receita.categoria) && Objects.equals(modoPreparo, receita.modoPreparo) && Objects.equals(qtdPorcao, receita.qtdPorcao) && Objects.equals(indInedita, receita.indInedita);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataCriacao, categoria, modoPreparo, qtdPorcao, indInedita);
    }
}
