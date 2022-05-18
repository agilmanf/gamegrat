import type { NextPage } from "next";
import Head from "next/head";
import GameBackground from "../components/GameBackground";
import Navbar from "../components/Navbar";
import styles from "../styles/Utils.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Game Gratis | Free Games Portal</title>
        <meta name="description" content="provide free games info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className={styles.background + " relative"}>
        <GameBackground />
        <article className="absolute h-full w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400 drop-shadow">
            Kalo Ada Yang Gratis Kenapa Harus Bayar ?
          </h1>
          <button className="border p-3">Dapatkan Sekarang</button>
        </article>
      </section>
    </div>
  );
};

export default Home;
