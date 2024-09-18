import { Dropdown } from "flowbite-react";
import React, { useState } from "react";

function FilterBar({ handleFilter }) {
  const [data, setData] = useState("");

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    setData(selectedValue);
    handleFilter(selectedValue);
  }

  return (
    <div className="max-w-md w-full md:w-auto">
      <form className="max-w-sm mx-auto">
        <label className="block mb-2 mt-1 text-sm font-medium text-gray-900">
          Filter
        </label>
        <select
          id="filter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
          onChange={handleSelectChange}
          value={data}
        >
          <option disabled value="">
            Filter By
          </option>
          <optgroup label="Place" style={{ color: "grey" }}>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </optgroup>
          <optgroup label="Location" style={{ color: "grey" }}>
            <option value="KL">Kowloon</option>
            <option value="HK">Hong Kong Island</option>
            <option value="NT">New Territories</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
}

export default FilterBar;
