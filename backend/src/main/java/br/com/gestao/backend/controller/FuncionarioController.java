package br.com.gestao.backend.controller;

import br.com.gestao.backend.model.Tabela;
import br.com.gestao.backend.service.FuncionarioService;
import br.com.gestao.backend.service.TabelaService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/funcionario/{id}")
public class FuncionarioController {

    // POST, GET, DELETE, PUT, OPITIONs, PATCH, HEAD

    private FuncionarioService service;

    FuncionarioController(FuncionarioService funcionarioService){this.service = funcionarioService;}

    @GetMapping
    public String getTabela(@PathVariable int id) throws IOException {
        Tabela tabela = service.getTabela(id);
        Gson gson = new GsonBuilder().create();
        return  gson.toJson(tabela);
    }
}
