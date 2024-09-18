import ListComponent from "../component/ListComponent";
import NavBar from "../component/NavBar";
import SearchBar from "../component/SearchBar";
import SortBar from "../component/SortBar";
import FilterBar from "../component/FilterBar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../component/ScrollToTopButton";

function MbtiPage({ eventmbti }) {
  let updatData = eventmbti.introvert.concat(eventmbti.extrovert);
  const [filteredEvents, setFilteredEvents] = useState(updatData);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [sortInput, setSortInput] = useState("");

  /////////Search/////////
  function handleSearch(data) {
    setSearchInput(data);
    const filteredEvents = updatData.filter(
      (event) =>
        event.event_name &&
        event.event_name.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  }

  /////////Filter/////////
  function handleFilter(data) {
    setFilterInput(data);

    let updatedEvents = updatData; // Copy the original event data

    // Apply search filter if there is a search input
    if (searchInput) {
      updatedEvents = updatData.filter(
        (event) =>
          event.event_name &&
          event.event_name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // Apply district and environment filter
    updatedEvents = updatedEvents.filter(
      (event) =>
        (event.event_district && event.event_district.includes(data)) ||
        (event.event_environment && event.event_environment.includes(data))
    );

    // Filter by event tags based on the selected type (introvert or extrovert)
    if (filterInput === "introvert") {
      updatedEvents = updatedEvents.filter(
        (event) => event.event_tags && event.event_tags.includes("introvert")
      );
    } else if (filterInput === "extrovert") {
      updatedEvents = updatedEvents.filter(
        (event) => event.event_tags && event.event_tags.includes("extrovert")
      );
    }

    // Apply sorting if there is a sort input
    if (sortInput === "Date") {
      updatedEvents.sort(
        (a, b) => new Date(b.event_date) - new Date(a.event_date)
      );
    } else if (sortInput === "Price") {
      updatedEvents.sort((a, b) => a.event_cost - b.event_cost);
    }

    setFilteredEvents(updatedEvents);
  }

  /////////Sort/////////

  function handleSort(data) {
    setSortInput(data);
    let sortedEvents = [...filteredEvents]; // Copy the current filtered events

    if (data === "Date") {
      sortedEvents.sort(
        (a, b) => new Date(a.event_date) - new Date(b.event_date)
      );
    } else if (data === "Price") {
      sortedEvents.sort((a, b) => a.event_cost - b.event_cost);
    }

    setFilteredEvents(sortedEvents);
  }
  return (
    <div>
      <div className="px-6 h-auto mx-auto text-center py-4 bg-amber-50/80">
        <NavBar />
      </div>
      <ScrollToTopButton />
      <div className="flex flex-row flex-wrap md:space-x-2 mx-4 py-2 px-6">
        <SortBar handleSort={handleSort} />
        <FilterBar handleFilter={handleFilter} />
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="flex flex-row flex-wrap space-x-2 mx-4 pt-2 px-6">
        <Link to="/mbti_introvert">
          <button className="inline-flex justify-center items-center py-2 px-5 text-sm font-medium text-center text-gray-600 rounded-lg border-grey-200 border hover:bg-gray-50">
            Introvert
          </button>
        </Link>
        <Link to="/mbti_extrovert">
          <button className="inline-flex justify-center items-center py-2 px-5 text-sm font-medium text-center text-gray-600 rounded-lg border-grey-200 border hover:bg-gray-50">
            Extrovert
          </button>
        </Link>
      </div>
      <div className="px-6 m-4 space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <ListComponent key={index} categoryData={event} />
          ))
        ) : (
          <p>No events match the current search in MBTI category.</p>
        )}
      </div>
    </div>
  );
}

export default MbtiPage;
