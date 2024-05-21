import React from "react";
import Link from "next/link";

// Passo a: Definir o componente com export const Menu: React.FC = () => { }
export const Menu: React.FC = () => {
  return (
    // Passo b: Retornar o menu de navegação, com tag nav, formatado pelo BootStrap
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Loja Next
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Passo c: Utilizar elementos do tipo Link, da biblioteca next/link */}
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link">Página Inicial</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" passHref>
                <a className="nav-link">Lista de Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" passHref>
                <a className="nav-link">Dados do Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
