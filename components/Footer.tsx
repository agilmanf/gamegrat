const Footer = () => {
  return (
    <div className="absolute bottom-0 font-mono text-sm text-slate-700 w-full text-center py-4">
      Created & Designed By{" "}
      <a
        href="https://agilman.netlify.app/"
        target="_blank"
        className="text-orange-600 font-bold"
        rel="noreferrer"
      >
        Gilman Firdaus
      </a>{" "}
      © 2022 | Powered By{" "}
      <a
        href="https://www.freetogame.com/api-doc"
        target="_blank"
        className="text-orange-600 font-bold"
        rel="noreferrer"
      >
        FreeToGame.com
      </a>
    </div>
  );
};

export default Footer;
