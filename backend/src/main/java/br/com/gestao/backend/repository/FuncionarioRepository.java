package br.com.gestao.backend.repository;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FuncionarioRepository {
    private FileWriter escrita = new FileWriter("funcionarios.txt");
    private FileReader leitura = new FileReader("funcionarios.txt");

    public FuncionarioRepository() throws IOException {
    }
}
