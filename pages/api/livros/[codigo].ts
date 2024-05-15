import { NextApiRequest, NextApiResponse } from "next";
import ControleLivros from "../../../classes/ControleLivros";

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const { codigo } = req.query;
      const codigoNumero = Number(codigo);

      if (isNaN(codigoNumero)) {
        res.status(400).json({ message: "Código inválido" });
        return;
      }

      const livro = controleLivros.getLivroById(codigoNumero);

      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ message: "Livro não encontrado" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
