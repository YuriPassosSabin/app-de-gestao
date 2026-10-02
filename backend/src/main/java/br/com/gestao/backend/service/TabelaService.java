package br.com.gestao.backend.service;

import br.com.gestao.backend.model.Funcionario;
import br.com.gestao.backend.model.Tabela;
import br.com.gestao.backend.repository.TabelaRepository;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.util.List;

@Service
public class TabelaService {
private TabelaRepository repository;

public TabelaService(TabelaRepository tabelaRepository){
    this.repository = tabelaRepository;
}

public List<Tabela> getTabelas() {
    return repository.getTabelas();
}
}
