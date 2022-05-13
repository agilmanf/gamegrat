import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Utils.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gamegrat | Free Games Portal</title>
        <meta name="description" content="provide free games info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className={styles.background}></section>
    </div>
  );
};

export default Home;
