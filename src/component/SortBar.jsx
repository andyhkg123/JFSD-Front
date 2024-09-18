import React, { useState } from "react";

function SortBar({ handleSort }) {
  const [data, setData] = useState("");

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setData(selectedValue);
    handleSort(selectedValue);
  }

  return (
    <div className="max-w-md w-full md:w-auto">
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="sort"
          className="block mb-2 text-sm mt-1 font-medium text-gray-900 "
        >
          Sort
        </label>
        <select
          id="sort"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          onChange={handleSelectChange}
          value={data}
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="Date">Date (Nearest First)</option>
          <option value="Price">Price (Lowest First)</option>
        </select>
      </form>
    </div>
  );
}

export default SortBar;
