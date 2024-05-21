interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[]; // Ou o tipo apropriado para os autores
  codEditora: number; // Ou o tipo apropriado para a editora
}

export default Livro;
