import { useEffect, useState } from "react";
import LinhaLivro from "../componentes/LinhaLivro";
import Livro from "../modelo/Livro";
import Menu from "../componentes/Menu";
import styles from "../styles/Home.module.css"; // Importação dos estilos

// Definição da constante baseURL
const baseURL = "http://localhost:3000/api/livros";

// Função obter, assíncrona, no estilo arrow function
const obterLivros = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

// Função excluirLivro, assíncrona, no estilo arrow function
const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
  return response.ok;
};

// Definição do componente LivroLista
const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  // Hook useEffect para efetuar a chamada para obterLivros
  useEffect(() => {
    if (!carregado) {
      obterLivros().then((data) => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  // Método excluir, estilo arrow function
  const excluir = (codigo: number) => {
    excluirLivro(codigo).then((sucesso) => {
      if (sucesso) {
        setCarregado(false);
      }
    });
  };

  return (
    <div className={styles.container}>
      <head>
        <title>Lista de Livros</title>
      </head>
      <Menu />
      <main className={styles.main}>
        <h1>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
