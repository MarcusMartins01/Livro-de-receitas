package com.testes.livro;

import com.testes.livro.entities.*;
import com.testes.livro.entities.pks.*;
import com.testes.livro.enums.Perfil;
import com.testes.livro.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.GenericArrayType;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class LivroApplication {


	public static void main(String[] args) {
		SpringApplication.run(LivroApplication.class, args);
	}


}
