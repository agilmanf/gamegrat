import styles from "../styles/GameBackground.module.css";

const GameBackground = () => {
  return (
    <section className="absolute h-full w-full overflow-hidden">
      <section className="absolute bottom-0">
        <div
          className={
            styles.mountain +
            " bg-[url(/mountain.png)] relative -bottom-56 h-[224px]"
          }
        ></div>
        <div
          className={
            styles.forest2 + " bg-[url(/forest2.png)] relative -bottom-28 h-40 "
          }
        ></div>
        <div className={styles.forest + " bg-[url(/forest1.png)] h-40 "}></div>
        <div className={styles.grass + " bg-[url(/grass.png)] h-16 "}></div>
      </section>
    </section>
  );
};

export default GameBackground;
