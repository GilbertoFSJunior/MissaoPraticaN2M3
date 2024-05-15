import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css"; // Importe os estilos do arquivo CSS

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {" "}
      {/* Use os estilos importados aqui */}
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {" "}
        {/* Use os estilos importados aqui */}
        <h1 className={styles.title}>Home Page</h1>{" "}
        {/* Use os estilos importados aqui */}
      </main>
    </div>
  );
};

export default Home;
