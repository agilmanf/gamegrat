const SearchBar = () => {
  return (
    <div id="search" className="font-roboto text-slate-800 text-sm">
      <form className="flex flex-wrap flex-col items-center md:flex-row gap-5 justify-between">
        <label htmlFor="platform">
          <span id="platform" className="font-bold">
            Platform:{" "}
          </span>
          <select name="platform" id="platform">
            <option value="all">All Platforms</option>
            <option value="windows">Windows(PC)</option>
            <option value="browser">Browser(WEB)</option>
          </select>
        </label>
        <label htmlFor="genre">
          <span id="genre" className="font-bold">
            Genre:{" "}
          </span>
          <select name="genre" id="genre">
            <option value="all">All Genres</option>
            <option value="mmo">MMO</option>
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
            <option value="strategy">Strategy</option>
            <option value="moba">Moba</option>
            <option value="card">Card Games</option>
            <option value="racing">Racing</option>
            <option value="sport">Sport</option>
            <option value="social">Social</option>
            <option value="fighting">Fighting</option>
          </select>
        </label>
        <label htmlFor="sort">
          <span id="sort" className="font-bold">
            Sort By:{" "}
          </span>
          <select name="sort" id="sort">
            <option value="release-date">Release Date</option>
            <option value="popularity">Popularity</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="relevance">Relevance</option>
          </select>
        </label>
        <label htmlFor="search">
          <span id="search" className="font-bold">
            Search:{" "}
          </span>
          <input
            type="text"
            className="text-xs text-slate-500 border px-2 py-[5px] rounded-2xl placeholder:italic placeholder:text-slate-300"
            placeholder="game title..."
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
