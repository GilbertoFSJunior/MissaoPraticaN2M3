// src/controle/ControleLivros.ts

import { Livro } from "../modelo/Livro";

// variável livros como Array<Livro> com três elementos
const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Use a Cabeça: Java",
    resumo:
      "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Java, como Programar",
    resumo:
      "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
    autores: ["Paul Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Core Java for the Impatient",
    resumo:
      "Readers familiar with Hortstmann's original, two-volume Core Java books who are looking for a comprehensive but condensed guide to all of Java's new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.",
    autores: ["Cay Hortsmann"],
  },
];

// Classe ControleLivro
class ControleLivro {
  // Método para obter a lista de livros
  obterLivros(): Array<Livro> {
    return livros;
  }

  // Método para incluir um novo livro
  incluir(livro: Livro): void {
    const novoCodigo =
      livros.length > 0 ? Math.max(...livros.map((l) => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  // Método para excluir um livro pelo código
  excluir(codigo: number): void {
    const indice = livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivro;
