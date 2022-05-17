import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import style from "../styles/Utils.module.css";

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

const Card: React.FC<GameData> = (props: GameData) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>GameGrat | Games List</title>
      </Head>
      <div
        className={style.card + " border rounded-lg group cursor-pointer"}
        onClick={() => router.push(`/browse/${props.id}`)}
      >
        <div className="relative max-w-[350px] aspect-[365/206] rounded-t-lg overflow-hidden">
          <Image
            src={props.thumbnail}
            alt={props.title}
            layout="fill"
            objectFit="contain"
            quality={90}
          ></Image>
          <div className="group-hover:bg-black/50 group-hover:opacity-100 opacity-0 flex w-full h-full absolute transition-all ease-out duration-200 text-orange-300 drop-shadow-lg font-bold">
            <h1 className="m-auto text-2xl text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-400 drop-shadow">
              Click For Details
            </h1>
          </div>
        </div>
        <article className="p-3 h-36 flex flex-col justify-between">
          <div>
            <h5 className="mb-1">{props.title}</h5>
            <p className="text-sm line-clamp-3">{props.short_description}</p>
          </div>
          <div className="flex justify-end">
            <p className="text-[10px] border border-sky-300 bg-sky-100 text-sky-600 rounded px-1 font-bold font-mono">
              {props.genre}
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
