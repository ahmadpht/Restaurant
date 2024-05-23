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
        backgroundImage: `linear-gradient(to bottom, rgba(4, 4, 4, 0), rgba(4, 4, 4, 0.8)), URL(${Pizza})`,
      }}
      className="bg-cover h-[70vh] mb-12 flex justify-center items-center text-center flex-col"
    >
      <div className="text-5xl mb-20">
        <h1 className="text-white ">Welcome to the Land of <span className="font-semibold bg-orange-500 p-1 rounded-lg">Food</span></h1>
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
