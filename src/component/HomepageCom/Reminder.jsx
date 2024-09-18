import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Reminder({ eventInfo }) {
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState("");
  const [eventTaken, setEventTaken] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    const userId = getUserIdFromCookie();
    setUserId(userId);
  }, []);

  function getUserIdFromCookie() {
    const cookies = document.cookie.split(";");
    let userId = null;

    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name === "user_id") {
        userId = value;
      }
    });
    return userId;
  }

  useEffect(() => {
    const getUserInfo = async (userId) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user_valid?_id=${userId}`
      );
      const data = await response.json();
      return data;
    };

    const fetchData = async () => {
      const data = await getUserInfo(userId);
      if (data) {
        setUserInfo(data);
        setEventTaken(data.event_taken || []);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    if (eventInfo && eventTaken.length > 0) {
      const currentDate = new Date();
      const filteredEvents = eventInfo.filter(
        (event) =>
          eventTaken.includes(event.event_id.toString()) &&
          new Date(event.event_date) >= currentDate
      );

      // Sort the filtered events by event_date in ascending order
      filteredEvents.sort(
        (a, b) => new Date(a.event_date) - new Date(b.event_date)
      );

      setFilteredEvents(filteredEvents);
    }
  }, [eventTaken, eventInfo]);

  return (
    <div>
      <div className="px-8 py-2 flex justify-between items-center">
        <h4 className="text-xl font-bold mt-2 mb-2">My Event Reminders</h4>
      </div>
      <div className="px-8 flex flex-row flex-start flex-wrap">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="w-full md:w-auto mr-4 bg-lime-50/50 p-3 flex-row flex-wrap mb-3  rounded-lg shadow"
            >
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 ">
                {event.event_name}
              </h5>
              <div className="flex-col items-start mb-2 text-gray-900 ">
                <div className="text-sm flex items-center mb-2">
                  <img
                    className="w-4 h-4 mr-1"
                    src="https://cdn-icons-png.flaticon.com/512/1502/1502944.png"
                    alt="Location Icon"
                  />
                  <span>{event.event_location}</span>
                </div>
                <div className="text-sm flex items-center mb-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9564/9564739.png"
                    alt="Event Icon"
                    className="w-4 h-4 mr-1"
                  />
                  <span>
                    {formatDate(event.event_date)} {event.event_time}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className=" mt-4 text-gray-600">
            You haven't joined any events yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Reminder;

//Show only 4 events
// return (
//   <div>
//     <div className="px-8 py-2 flex justify-between items-center">
//       <h4 className="text-xl font-bold mt-2 mb-2">My Event Reminders</h4>
//     </div>
//     <div className="px-8 flex flex-row flex-start flex-wrap">
//       {filteredEvents.slice(0, 4).map((event, index) => (
//         <div
//           key={index}
//           className="w-full md:w-auto mr-4 bg-lime-50/50 p-3 flex-row flex-wrap mb-3  rounded-lg shadow"
//         >
//           <h5 className="mb-2 font-bold tracking-tight text-gray-900">
//             {event.event_name}
//           </h5>
//           <div className="flex-col items-start mb-2 text-gray-900">
//             <div className="text-sm flex items-center mb-2">
//               <img
//                 className="w-4 h-4 mr-1"
//                 src="https://cdn-icons-png.flaticon.com/512/1502/1502944.png"
//                 alt="Location Icon"
//               />
//               <span>{event.event_location}</span>
//             </div>
//             <div className="text-sm flex items-center mb-2">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/9564/9564739.png"
//                 alt="Event Icon"
//                 className="w-4 h-4 mr-1"
//               />
//               <span>
//                 {formatDate(event.event_date)} {event.event_time}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//       {filteredEvents.length === 0 && (
//         <p className="mt-4 text-gray-600">You haven't joined any events yet.</p>
//       )}
//     </div>
//   </div>
// );
