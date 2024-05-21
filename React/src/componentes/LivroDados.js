// src/componentes/LivroDados.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivro from "../controle/ControleLivros";
import ControleEditora from "../controle/ControleEditoras";

// Instanciando os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  // opções das editoras
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // Definindo os estados
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || "");

  // Hook de navegação
  const navigate = useNavigate();

  // Método para tratar mudanças na combo de editoras
  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  // Método para incluir um novo livro
  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split("\n"),
    };
    controleLivro.incluir(novoLivro);
    navigate("/");
  };

  return (
    <main className="container">
      <h1 className="my-4">Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (um por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          <select
            id="editora"
            className="form-select"
            value={codEditora}
            onChange={tratarCombo}
            required
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
