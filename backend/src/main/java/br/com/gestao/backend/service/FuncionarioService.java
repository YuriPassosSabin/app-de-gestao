package br.com.gestao.backend.service;

import br.com.gestao.backend.model.Funcionario;
import br.com.gestao.backend.model.Tabela;
import br.com.gestao.backend.repository.TabelaRepository;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;

@Service
public class FuncionarioService {

    private TabelaRepository repository;

    FuncionarioService(TabelaRepository tabelaRepository){this.repository = tabelaRepository;}

    public Tabela getTabela(int id) {
       return repository.getTabela(id);
    }
}
