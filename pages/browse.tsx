/* eslint-disable react-hooks/rules-of-hooks */
import NavbarWhite from "../components/NavbarWhite";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";

interface GamesProps {
  games: GameData[];
}

interface GameData {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  status: number;
}

const browse = (props: GamesProps) => {
  const [games, setGames] = useState(props.games);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Game Gratis: Games List</title>
      </Head>
      <NavbarWhite />
      <div className="min-h-[160vh] pb-[64px] relative">
        <section
          id="hero"
          className="h-96 flex bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        ></section>
        <main className="xl:w-[1170px] 2xl:w-[1500px] xl:mx-auto mx-10 my-10">
          <SearchBar setGames={setGames} setLoading={setLoading} />
          <hr className="my-5" />
          <div
            id="card-container"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7"
          >
            {loading
              ? "loading"
              : games.length !== undefined
              ? games.map((game) => <Card {...game} key={game.id} />)
              : "Not Found"}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const games = await fetch(
    "https://www.freetogame.com/api/games?sort-by=release-date"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: { games },
  };
}

export default browse;
