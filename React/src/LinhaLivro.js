// LinhaLivro.js

import React from "react";

const LinhaLivro = ({ livro }) => {
  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.editora}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores &&
            livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}
        </ul>
      </td>
      <td>{/* Botão de exclusão aqui */}</td>
    </tr>
  );
};

export default LinhaLivro;
