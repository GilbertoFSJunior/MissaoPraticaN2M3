import { NextApiRequest, NextApiResponse } from "next";
import ControleLivros from "../../../classes/ControleLivros";

const controleLivros = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const livros = controleLivros.getLivros();
      res.status(200).json(livros);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
