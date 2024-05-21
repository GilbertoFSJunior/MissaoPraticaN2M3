import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleEditora from "../classes/ControleEditora";
import Head from "next/head";
import styles from "../styles/Home.module.css"; // Importação dos estilos
import Livro from "../modelo/Livro";

// Definição do componente LivroDados
const LivroDados: React.FC = () => {
  // Definição do objeto ControleEditora
  const controleEditora = new ControleEditora();

  // Definição da constante baseURL
  const baseURL = "http://localhost:3000/api/livros";

  // Função incluirLivro, assíncrona, no estilo arrow function
  const incluirLivro = async (livro: Livro) => {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });
    return response.ok;
  };

  // Definição do vetor opcoes, invocando o método getEditoras
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // Definição das propriedades de estado
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  // Hook useNavigate
  const navigate = useNavigate();

  // Método tratarCombo
  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  // Método incluir
  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };
    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      navigate("/livroLista");
    }
  };

  return (
    <div className={styles.container}>
      <head>
        <title>Dados do Livro</title>
      </head>
      <menu />
      <main className={styles.main}>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <label>
            Título:
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </label>
          <br />
          <label>
            Resumo:
            <textarea
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </label>
          <br />
          <label>
            Autores:
            <textarea
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </label>
          <br />
          <label>
            Editora:
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Incluir Livro</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
