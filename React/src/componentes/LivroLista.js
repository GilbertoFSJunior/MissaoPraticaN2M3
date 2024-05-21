// src/componentes/LivroLista.tsx

import React, { useState, useEffect } from "react";
import ControleLivro from "../controle/ControleLivros";
import ControleEditora from "../controle/ControleEditoras";

// Instanciando os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

// Componente auxiliar LinhaLivro
const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

// Componente principal
const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false); // redesenho ao recarregar a lista de livros
  };

  return (
    <main className="container">
      <h1 className="my-4">Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {livros.length > 0 ? (
            livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum livro encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
