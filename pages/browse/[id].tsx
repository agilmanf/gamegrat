import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Utils.module.css";

interface GameDetailsProps {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: SystemRec;
  screenshots: Screenshot[];
}

interface Screenshot {
  id: number;
  image: string;
}

interface SystemRec {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

const GameDetails = (props: { game: GameDetailsProps }) => {
  const { game } = props;
  return (
    <>
      <Head>
        <title>{game.title}</title>
      </Head>
      <section>
        <Navbar />
        <section className={styles.skygradient + " min-h-screen relative"}>
          {/* Background */}
          <div className="w-full h-full absolute">
            <div className="relative max-w-full min-h-screen h-screen m-auto opacity-20">
              <>
                {game.screenshots.length !== 0 ? (
                  <Image
                    src={game.screenshots[0]?.image}
                    alt={game.title}
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                ) : (
                  ""
                )}
              </>
              <div className="bg-gradient-to-t from-white to-transparent absolute w-full h-full"></div>
              <div className={styles.gradient}></div>
            </div>
            <div className="relative max-w-full h-[calc(100%-100vh)] bg-white opacity-20"></div>
          </div>
          {/* End Background */}

          {/* Main Content */}
          <main className="relative py-[120px] px-32">
            <header className="md:flex gap-10">
              <aside className="md:w-[30%] lg:min-w-[300px] h-full">
                <div className="relative w-full h-full aspect-video border-4 border-white shadow-lg">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                  ></Image>
                </div>
                <a
                  href={game.game_url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    styles.button +
                    " block text-center font-bold text-[#bd7d07] text-lg my-5 py-3 w-full bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm"
                  }
                >
                  Play Now
                </a>
                {game.minimum_system_requirements ? (
                  <section>
                    <h1 className="text-lg text-slate-800 font-roboto">
                      Minimum Requirenments
                    </h1>
                    <hr className="my-1 border-slate-600" />
                    <ul className="text-sm font-roboto mt-3">
                      <li className="my-1">
                        <div className="text-slate-800 font-bold">
                          Processor
                        </div>
                        <div className="text-slate-200">
                          {game.minimum_system_requirements.processor}
                        </div>
                      </li>
                      <li className="my-1">
                        <div className="text-slate-800 font-bold">Graphics</div>
                        <div className="text-slate-200">
                          {game.minimum_system_requirements.graphics}
                        </div>
                      </li>
                      <li className="my-1">
                        <div className="text-slate-800 font-bold">Memory</div>
                        <div className="text-slate-200">
                          {game.minimum_system_requirements.memory}
                        </div>
                      </li>
                      <li className="my-1">
                        <div className="text-slate-800 font-bold">Storage</div>
                        <div className="text-slate-200">
                          {game.minimum_system_requirements.storage}
                        </div>
                      </li>
                      <li className="my-1">
                        <div className="text-slate-800 font-bold">
                          {" "}
                          Operating System
                        </div>
                        <div className="text-slate-200">
                          {game.minimum_system_requirements.os}
                        </div>
                      </li>
                    </ul>
                  </section>
                ) : (
                  ""
                )}
              </aside>
              <article className="lg:w-[70%]">
                <h1 className="title">{game.title}</h1>
                <div className="my-5 px-1 grid grid-cols-3 gap-x-10 gap-y-3">
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Developer
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.developer}
                    </h5>
                  </div>
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Publisher
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.publisher}
                    </h5>
                  </div>
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Release Date
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.release_date}
                    </h5>
                  </div>
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Genre
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.genre}
                    </h5>
                  </div>
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Platform
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.platform}
                    </h5>
                  </div>
                  <div>
                    <h4 className="font-roboto text-slate-800 font-bold">
                      Status
                    </h4>
                    <h5 className="font-roboto text-slate-200 text-sm">
                      {game.status}
                    </h5>
                  </div>
                </div>

                <section className="mt-6">
                  <article className="col-span-2">
                    <h1 className="text-2xl">About The Game</h1>
                    <p className="my-2 text-sm text-justify">
                      {game.description}
                    </p>
                    <>
                      {game.screenshots.length !== 0 ? (
                        <>
                          <h1 className="text-xl my-4">Screenshots :</h1>
                          <div className="flex flex-col gap-5">
                            {game.screenshots.map((ss) => (
                              <>
                                <div
                                  key={ss.id}
                                  className="relative aspect-video border-white border-8 shadow-lg"
                                >
                                  <Image
                                    src={ss.image}
                                    alt={game.title}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={90}
                                  ></Image>
                                </div>
                              </>
                            ))}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  </article>
                </section>
              </article>
            </header>
          </main>
        </section>
      </section>
    </>
  );
};

export default GameDetails;

export async function getStaticPaths() {
  const games = await fetch("https://www.freetogame.com/api/games")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const paths = games.map((game: { id: number }) => ({
    params: {
      id: `${game.id}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const game = await fetch("https://www.freetogame.com/api/game?id=" + id)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  // const game = await fetch("https://www.freetogame.com/api/game?id=255")
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));

  return {
    props: {
      game,
    },
  };
}
