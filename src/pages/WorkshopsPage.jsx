import ListComponent from "../component/ListComponent";
import NavBar from "../component/NavBar";
import SearchBar from "../component/SearchBar";
import SortBar from "../component/SortBar";
import FilterBar from "../component/FilterBar";
import React, { useState } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";

function WorkshopsPage({ eventWorkshops }) {
  const [filteredEvents, setFilteredEvents] = useState(eventWorkshops);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [sortInput, setSortInput] = useState("");

  /////////Search/////////
  function handleSearch(data) {
    setSearchInput(data);
    const filteredEvents = eventWorkshops.filter(
      (event) =>
        event.event_name &&
        event.event_name.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  }

  /////////Filter/////////
  function handleFilter(data) {
    setFilterInput(data);

    let updatedEvents = eventWorkshops.slice(); // Copy the original event data

    // Apply search filter if there is a search input
    if (searchInput) {
      updatedEvents = updatedEvents.filter(
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
      <div className="px-6 m-4 space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <ListComponent key={index} categoryData={event} />
          ))
        ) : (
          <p>No events match the current search in workshops category.</p>
        )}
      </div>
    </div>
  );
}

export default WorkshopsPage;
