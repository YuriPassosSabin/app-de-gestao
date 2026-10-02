package br.com.gestao.backend.repository;

import br.com.gestao.backend.model.Tabela;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.Strictness;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import org.springframework.stereotype.Repository;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TabelaRepository {
    private File funcionarios;
    private List<Tabela> tabelas;

    TabelaRepository() throws IOException {
        this.funcionarios = new File("funcionarios.json");
        FileReader ler = new FileReader(funcionarios);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonReader leitor = gson.newJsonReader(ler);
        this.tabelas = gson.fromJson(leitor, new TypeToken<List<Tabela>>(){});
    }

    public Tabela getTabela(int id) {

        return tabelas.get(id -1);
    }

    public List<Tabela> getTabelas(){
        return tabelas;
    }

    public void armazenaTabela() throws IOException {

        String tabela = "{\"id\": 2," +
                "\"title\": \"Tabela de Funcionarios2\"," +
                "\"funcionarios\":[" +
                "{" +
                "\"id\": 3," +
                "\"name\": \"roberto\"," +
                "\"funct\": \"operador de produção\"," +
                "\"target\": \"usinar peças\"," +
                "\"term\": \"01/10/2026\"," +
                "\"email\": \"robero@gmail.com\"," +
                "\"phone\": \"999999999\"" +
                "}]}";

        FileWriter escrever = new FileWriter(funcionarios);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonWriter escritor = gson.newJsonWriter(escrever);



    }
}
