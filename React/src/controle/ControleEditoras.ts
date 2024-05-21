// src/controle/ControleEditora.ts

import Editora from "../modelo/Editora";

// variável editoras como Array<Editora> com três elementos
const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Alta Books" },
  { codEditora: 2, nome: "Pearson" },
  { codEditora: 3, nome: "Addison Wesley" },
];

// Classe ControleEditora
class ControleEditora {
  // Método para obter a lista de editoras
  getEditoras(): Array<Editora> {
    return editoras;
  }

  // Método para obter o nome da editora pelo código
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
