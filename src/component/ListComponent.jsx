import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ListComponent({ categoryData }) {
  const [eventId, setEventId] = useState("");

  const eventDate = categoryData.event_date;
  const dateObj = new Date(eventDate);

  // Extract day, month, and year from the date object
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "short" }); // Get full month name
  const year = dateObj.getFullYear();

  // Function to truncate the description to 50 words
  const truncateDescription = (description) => {
    // Check if description is defined and not null
    if (description) {
      const words = description.split(" ");
      if (words.length > 50) {
        return words.slice(0, 50).join(" ") + "...";
      }
      return description;
    }
    // Return an empty string if description is undefined or null
    return "";
  };

  function handleOnClick() {
    setEventId(categoryData.event_id);
  }

  return (
    <div className="hover:-translate-y-1 w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <Link to={`/content/${categoryData.event_id}`} onClick={handleOnClick}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:pl-2 md:w-1/6">
            <img
              className="object-cover rounded-md w-full md:w-[200px] md:h-[100px]"
              // src="https://bmmagazine.co.uk/wp-content/uploads/2024/04/shutterstock_1451997806-scaled.jpg"
              src={categoryData.event_photo}
              alt={categoryData.event_name}
            />
          </div>

          <div className="w-full md:w-5/6">
            <h1 className="text-2xl md:pl-2 md:pl-4 font-bold">
              {categoryData.event_name}
            </h1>
            <div className="flex items-start justify-start flex-wrap max-w-5xl text-gray-600 mb-4 md:pl-2 md:pl-4 ">
              {/* Time */}
              <div className="flex items-start mr-4 mt-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9564/9564739.png"
                  alt="Event Icon"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm w-56">
                  {" "}
                  {day} {month}, {year} {categoryData.event_time}
                </span>
              </div>
              {/* Location */}
              <div className="flex items-start mr-4 mt-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1502/1502944.png"
                  alt="Event Icon"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm w-56">
                  {categoryData.event_location}, {categoryData.event_district}
                </span>
              </div>
              {/* Fee */}
              <div className="flex items-center mr-4 mt-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/11701/11701025.png"
                  alt="Event Icon"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm w-56">${categoryData.event_cost}</span>
              </div>
            </div>
            <p className="md:pl-2 md:pl-4 text-sm text-gray-500">
              {truncateDescription(categoryData.event_description)}{" "}
            </p>
            <button className="md:pl-2 md:pl-4  text-sm text-gray-700">
              Read More...
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListComponent;
