import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

interface GamesProps {
  games: Array<any>;
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
}

const browse = (props: GamesProps) => {
  const games = props.games;

  return (
    <>
      <Navbar />
      <div>
        <section
          id="hero"
          className="h-96 bg-gradient-to-t from-[#cde3ff] to-[#3d91d5] flex"
        >
          <h1 className="m-auto text-5xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400 drop-shadow">
            ALL FREE
          </h1>
        </section>
        <main className="xl:w-[1170px] 2xl:w-[1500px] xl:mx-auto mx-10 my-10">
          <SearchBar />
          <hr className="my-5" />
          <div id="card-container" className="grid grid-cols-4 gap-7">
            {/* <Card {...games} /> */}
            {games.map((game) => (
              <Card {...game} key={game.id} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export async function getStaticProps() {
  //   const games = await fetch("https://www.freetogame.com/api/game?id=102")
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));

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
