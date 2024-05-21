import React from "react";
import ControleEditora from "../classes/ControleEditora";
import Livro from "../modelo/Livro";

// Passo 1: Instância de ControleEditora
const controleEditora = new ControleEditora();

// Passo 2: Definição da interface LinhaLivroProps
interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

// Passo 3: Definição do componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  // Passo 4: Corpo da função LinhaLivro copiado de LivroLista.js
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};

export default LinhaLivro;
