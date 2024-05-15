import Livro from "../modelo/Livro";

class ControleLivros {
  private livros: Livro[] = [
    {
      codigo: 1,
      titulo: "Livro A",
      resumo: "Resumo A",
      codEditora: 1,
      autores: [],
    },
    {
      codigo: 2,
      titulo: "Livro B",
      resumo: "Resumo B",
      codEditora: 2,
      autores: [],
    },
    // Adicione mais livros conforme necessário
  ];

  getLivros() {
    return this.livros;
  }

  getLivroById(codigo: number) {
    return this.livros.find((livro) => livro.codigo === codigo);
  }

  incluir(livro: Livro) {
    this.livros.push(livro);
  }

  excluir(codigo: number) {
    this.livros = this.livros.filter((livro) => livro.codigo !== codigo);
  }
}

export default ControleLivros;
