import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EventDiv({ categoryData }) {
  const [eventId, setEventId] = useState("");
  function extractCity(location) {
    if (location && location.includes(",")) {
      const city = location.split(",")[1];
      return city ? city.trim() : ""; // Check if city is not undefined before trimming
    }
    return ""; // Return an empty string if location is undefined or doesn't contain a comma
  }

  const eventDate = categoryData.event_date;
  const dateObj = new Date(eventDate);

  // Extract day, month, and year from the date object
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" }); // Get full month name
  const year = dateObj.getFullYear();

  function handleOnClick() {
    setEventId(categoryData.event_id);
  }

  return (
    <div className="hover:-translate-y-1 flex-row flex-wrap md:max-w-xs lg:max-w-xs mb-3 bg-white border border-gray-200 rounded-lg shadow">
      <Link to={`/content/${categoryData.event_id}`} onClick={handleOnClick}>
        <div className="relative">
          <img
            className="rounded-t-lg object-cover h-[212px] w-[318px]"
            // src="https://bmmagazine.co.uk/wp-content/uploads/2024/04/shutterstock_1451997806-scaled.jpg"
            src={categoryData.event_photo}
            alt={categoryData.event_name}
          />
          <div className="absolute content-center bottom-0 left-0">
            <div className="flex-column mx-suto text-center">
              <div className="rounded-t-md text-2xl font-bold h-10 w-16 bg-amber-300 content-center">
                {day}
              </div>
              <div className="text-xs h-6 w-16 bg-lime-50 content-center">
                {month},{year}
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {categoryData.event_name}
          </h5>

          <div className="flex items-center space-x-2.5 mb-2 tracking-tight text-gray-900">
            <div className="flex items-center mb-2">
              <img
                className="w-4 h-4 mr-1"
                src="https://cdn-icons-png.flaticon.com/512/1502/1502944.png"
              />
              <span>{categoryData.event_location}</span>
            </div>
            <div className="flex items-center mb-2">
              <img
                className="w-5 h-5 mr-1"
                src="https://cdn-icons-png.flaticon.com/512/11701/11701025.png"
              />
              <span>${categoryData.event_cost}</span>
            </div>
          </div>
          <button className="inline-flex justify-center items-center text-base font-medium text-center text-gray-900 hover:border-b hover:border-gray-400">
            Explore More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
}
export default EventDiv;
