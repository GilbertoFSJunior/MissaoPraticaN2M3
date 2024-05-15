import { useEffect, useState } from "react";
import LinhaLivro from "../../componentes/LinhaLivro";
import Livro from "../../modelo/Livro";
import Menu from "../../componentes/Menu";

const Livros = () => {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    fetch("/api/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data));
  }, []);

  const excluirLivro = (codigo: number) => {
    fetch(`/api/livros/${codigo}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setLivros((prevLivros) =>
            prevLivros.filter((livro) => livro.codigo !== codigo)
          );
        } else {
          console.error("Falha ao excluir o livro");
        }
      })
      .catch((error) => console.error("Erro:", error));
  };

  return (
    <div>
      <Menu />
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Ações</th> {/* Adicionando uma coluna para ações */}
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={() => excluirLivro(livro.codigo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Livros;
