package com.testes.livro.services;

import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.*;
import com.testes.livro.enums.Perfil;
import com.testes.livro.enums.StatusFuncionario;
import com.testes.livro.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@Service
public class DbService {

    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private CargoRepository cargoRepository;
    @Autowired
    private FuncionarioRepository funcionarioRepository;
    @Autowired
    private IngredienteRepository ingredienteRepository;
    @Autowired
    private LivroRepository livroRepository;
    @Autowired
    private MedidaRepository medidaRepository;
    @Autowired
    private RestauranteRepository restauranteRepository;
    @Autowired
    private ComposicaoRepository composicaoRepository;
    @Autowired
    private ReceitaRepository receitaRepository;
    @Autowired
    private ReferenciaRepository referenciaRepository;
    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private ParametroRepository parametroRepository;
    @Autowired
    private PublicacaoLivroRepository publicacaoLivroRepository;
    @Autowired
    private DegustacaoRepository degustacaoRepository;

    public void instanciaDB() {
       /* Usuario user1 = new Usuario( null, "teste1@gmail.com", "123456");

        Usuario user2 = new Usuario(null, "M@email.com", "123456", "ROLE.COZINHEIRO");

        Usuario user3 = new Usuario(null, "Marc@email.com", "123456", "ROLE_DEGUSTADOR");

        Cargo cargo1 = new Cargo(null, "Degustador");

        Ingrediente ingrediente1 = new Ingrediente(null, "Macarrão", null);

        Medida medida = new Medida(null, "ml");

        Restaurante restaurante = new Restaurante(null, "Restaurante1", "40028922");

        Categoria categoria = new Categoria(null, "Carnes");

        Funcionario func1 = new Funcionario(null, "Marcus", "3852077", 2000.00, cargo1, "Marcão", user3, StatusFuncionario.ATIVO);

        String dateStr = "09/11/2022";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        Referencia referencia = new Referencia(new ReferenciaPk(func1, restaurante), LocalDate.parse("09/11/2003", formatter), LocalDate.parse(dateStr, formatter));

        Receita receita = new Receita(new ReceitaPk("Carne de panela", func1), categoria, "AAAAAAAAAAAAA", 5, 1);

        FileData imagem = new FileData(null, "livrologo.png", "image/jpeg", "C://ImagensLivro/livrologo.png", receita);

        Composicao composicao = new Composicao(new ComposicaoPk(ingrediente1, receita), medida, 5);

        Livro livro = new Livro(null, "Receitas de carnes", "9-780000-000002", func1);

        Parametro parametro = new Parametro(new ParametroPk(12, 2023), 40);

        Degustacao degustacao = new Degustacao(new DegustacaoPk(func1, receita), 9.8);

        PublicacaoLivro publicacaoLivro = new PublicacaoLivro(new PublicacaoLivroPk(livro, receita));



        repository.saveAll(Arrays.asList(user1, user2, user3));
        cargoRepository.save(cargo1);
        funcionarioRepository.save(func1);
        ingredienteRepository.save(ingrediente1);
        livroRepository.save(livro);
        medidaRepository.save(medida);
        restauranteRepository.save(restaurante);
        categoriaRepository.save(categoria);
        referenciaRepository.save(referencia);
        receitaRepository.save(receita);
        composicaoRepository.save(composicao);
        parametroRepository.save(parametro);
        publicacaoLivroRepository.save(publicacaoLivro);
        degustacaoRepository.save(degustacao);
        fileDataRepository.save(imagem);*/
    }
}
