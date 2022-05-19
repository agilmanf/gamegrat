import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import GameBackground from "../components/GameBackground";
import Navbar from "../components/Navbar";
import styles from "../styles/Utils.module.css";

const Home: NextPage = () => {
  const router = useRouter();
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
        <article className="absolute h-full w-full flex flex-col items-center justify-center gap-6 pb-10">
          <h1 className="text-3xl px-5 text-center md:text-4xl lg:text-5xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400 drop-shadow">
            Kalo Ada Yang Gratis Kenapa Harus Bayar ?
          </h1>
          <button
            className={
              styles.card +
              " border-2 border-gray-200 bg-gray-300 p-3 rounded text-gray-500/70 font-roboto font-bold hover:text-gray-500 text-xs md:text-sm lg:text-base 2xl:text-xl"
            }
            onClick={() => router.push("/browse")}
          >
            Dapatkan Sekarang
          </button>
        </article>
      </section>
    </div>
  );
};

export default Home;
