import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/homesearch?search=${data}`);
  };

  return (
    <div className="max-w-md w-full mx-auto my-5">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="text"
            id="default-search"
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for anything"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-1.5 bottom-1.5 bg-amber-400 hover:bg-amber-500 font-medium rounded-md text-sm px-4 py-1.5"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
