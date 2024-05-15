//react
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
//assets
import Pizza from "../../assets/BGPizza.jpg";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const submitForm = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, #4d4c4c4f, #000), URL(${Pizza})`,
      }}
      className="bg-cover h-[70vh] mb-12 flex justify-center items-center flex-col"
    >
      <div className="text-5xl mb-20">
        <h1 className="text-white ">Welcome to the</h1>
        <h1 className="text-orange-500 mt-4">Land of Food</h1>
      </div>
      <form
        onSubmit={submitForm}
        className="flex justify-center items-center relative"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Food"
          required
          className="w-96 h-12 rounded-s-xl px-4 outline-none text-xl"
        />
        <button
          onClick={submitForm}
          className="h-12 w-12 flex items-center justify-center rounded-e-xl text-3xl border-none outline-none text-white bg-orange-500"
        >
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
