package br.com.gestao.backend.controller;

import br.com.gestao.backend.model.Tabela;
import br.com.gestao.backend.service.TabelaService;
import com.google.gson.*;
import com.google.gson.stream.JsonReader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.List;

@RestController
@RequestMapping("/tabela")
public class TabelaController {

    // POST, GET, DELETE, PUT, OPITIONs, PATCH, HEAD

    private TabelaService service;

    TabelaController(TabelaService tabelaServise){
        this.service = tabelaServise;
    }

    @GetMapping
    public String getTabelas() throws IOException {
        List<Tabela> tabela = service.getTabelas();
        Gson gson = new GsonBuilder().create();
        return  gson.toJson(tabela);

    }


}
