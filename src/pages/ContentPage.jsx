import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ContentNavBar from "../component/ContentCom/ContentNavBar";
import StackBar from "../component/ContentCom/StackBar";
import "../css/ContentPage.css";
import AuthUser from "../component/AuthUser";

function ContentPage({ eventInfo }) {
  const isUserLoggedIn = AuthUser();
  const { eventId } = useParams();
  const [eventData, setEventData] = useState([]);

  function extractDay(date) {
    return new Date(date).getDate();
  }

  function extractMonthYear(date) {
    const options = { month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  const getData = useCallback(
    (eventId) => {
      const filteredData = eventInfo.filter(
        (data) => data.event_id === parseInt(eventId)
      );
      setEventData(filteredData);
    },
    [eventInfo]
  );

  useEffect(() => {
    getData(eventId);
  }, [eventId, getData]);

  //Display Attendees//
  const [userInfo, setUserInfo] = useState([]);
  const [eventAttendees, setEventAttendees] = useState([]);
  const [sexArr, setSexArr] = useState([]);
  const [mbtiArr, setmbtiArr] = useState([]);

  useEffect(() => {
    if (
      eventData &&
      eventData.length > 0 &&
      eventData[0] &&
      eventData[0].event_attendees
    ) {
      setEventAttendees(eventData[0].event_attendees);
    }
  }, [eventData]);

  useEffect(() => {
    const getUserInfo = async (userId) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user_valid?_id=${userId}`
      );
      const data = await response.json();
      return data;
    };

    const fetchUserInfo = async () => {
      if (eventAttendees.length === 0) {
        return;
      }

      const promises = eventAttendees.map((userId) => getUserInfo(userId));
      const userData = await Promise.all(promises);
      setUserInfo(userData);
    };

    fetchUserInfo();
  }, [eventAttendees]);

  useEffect(() => {
    setSexArr(userInfo.map((data) => data.sex));
    setmbtiArr(userInfo.map((data) => data.mbti));
  }, [userInfo]);

  //count sex percentage//
  let maleCount = 0;
  let femaleCount = 0;

  sexArr.forEach((gender) => {
    if (gender === "Male") {
      maleCount++;
    } else if (gender === "Female") {
      femaleCount++;
    }
  });

  let maleMember = Math.round((maleCount / sexArr.length) * 100); //show on Website
  let femaleMember = Math.round((femaleCount / sexArr.length) * 100); //show on Website

  // //count mbti percentage//

  let extroCount = 0;
  let introCount = 0;

  mbtiArr.forEach((mbti) => {
    if (mbti && mbti.charAt(0) === "E") {
      extroCount++;
    } else if (mbti && mbti.charAt(0) === "I") {
      introCount++;
    }
  });

  let extrovert = Math.round((extroCount / mbtiArr.length) * 100); //show on Website
  let introvert = Math.round((introCount / mbtiArr.length) * 100); //show on Website

  //show reminding//
  const remainingQuota =
    eventData[0]?.event_attendeesLimit - eventAttendees.length;
  return (
    <div>
      {/* Sticky Box */}
      <div className="bg-lime-50/50 items-center">
        <div className="sticky top-0 bg-white shadow-lg pl-6 pr-4 pt-2 pb-2 rounded-b-xl">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{eventData[0]?.event_name}</h1>
          </div>
          <div className="flex flex-wrap items-center justify-start mb-2">
            <div className="flex items-start text-gray-600 w-full flex-col md:flex-row md:w-5/6">
              {/* Time */}
              <div className="flex items-center mr-6 mb-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9564/9564739.png"
                  alt="Event Icon"
                  className="w-6 h-6 md:w-7 md:h-7 mr-2"
                />
                <span className="text-sm material-icons mr-2 w-full md:w-56">
                  {extractDay(eventData[0]?.event_date)}{" "}
                  {extractMonthYear(eventData[0]?.event_date)}
                  {", "}
                  {eventData[0]?.event_time}
                </span>
              </div>
              {/* Location */}
              <div className="flex items-center mr-6 mb-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1502/1502944.png"
                  alt="Event Icon"
                  className="w-6 h-6 md:w-7 md:h-7 mr-2"
                />
                <span className="text-sm material-icons mr-2 w-full md:w-56">
                  {eventData[0]?.event_location}, {eventData[0]?.event_district}
                </span>
              </div>
              {/* Fee */}
              <div className="flex items-center mr-6 mb-2 max-w-max">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/11701/11701025.png"
                  alt="Event Icon"
                  className="w-6 h-6 md:w-7 md:h-7 mr-2"
                />
                <span className="text-sm material-icons mr-2 w-full md:w-56">
                  ${eventData[0]?.event_cost}
                </span>
              </div>
            </div>
            {/* <div className="flex w-full md:w-1/6 justify-end">
              {isUserLoggedIn && (
                <Link to={`/payment?event_id=${eventId}`}>
                  <button
                    className="py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-400 hover:bg-amber-500"
                    type="button"
                  >
                    Join Us
                  </button>
                </Link>
              )}
              {!isUserLoggedIn && (
                <Link to={`/signup`}>
                  <button
                    className="py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-300 hover:bg-amber-400"
                    type="button"
                  >
                    Join Us
                  </button>
                </Link>
              )}
            </div> */}
            <div className="flex w-full md:w-1/6 justify-end">
              {isUserLoggedIn && (
                <Link
                  to={remainingQuota > 0 ? `/payment?event_id=${eventId}` : "#"}
                >
                  <button
                    disabled={remainingQuota === 0}
                    className={`py-2 px-5 text-base font-medium text-center text-white rounded-lg ${
                      remainingQuota > 0
                        ? "bg-amber-500 hover:bg-amber-400"
                        : "bg-gray-400"
                    }`}
                    type="button"
                  >
                    {remainingQuota > 0 ? "Join Us" : "Full"}
                  </button>
                </Link>
              )}
              {!isUserLoggedIn && (
                <Link to={remainingQuota > 0 ? `/signup` : "#"}>
                  <button
                    disabled={remainingQuota === 0}
                    className={`py-2 px-5 text-base font-medium text-center text-white rounded-lg ${
                      remainingQuota > 0
                        ? "bg-amber-500 hover:bg-amber-400"
                        : "bg-gray-400"
                    }`}
                    type="button"
                  >
                    {remainingQuota > 0 ? "Join Us" : "Full"}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <ContentNavBar
          name={eventData[0]?.event_name}
          category={eventData[0]?.event_catagory}
        />
        <div className="px-6 flex flex-col space-x-4 md:flex-row">
          <div className="mb-4 w-full px-4 md:w-2/5">
            <img
              className="object-fit rounded-xl w-[500px]"
              // src="https://www.traveloffpath.com/wp-content/uploads/2022/05/There-Will-Not-Be-Last-Minute-Travel-Deals-This-Summer-.jpg"
              src={eventData[0]?.event_photo}
              alt="Event"
            />
          </div>
          <div className="md:w-3/5">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Detail</h2>
              <p className="text-gray-700 mt-2">
                {eventData[0]?.event_description}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">
                Attendees ({eventAttendees.length}){" "}
                <span className="text-sm font-normal text-gray-600">
                  {remainingQuota === 1
                    ? "Only 1 spot left! Hurry and register!"
                    : remainingQuota > 0
                    ? `Hurry! Only ${remainingQuota} spots left for this event!`
                    : "Sorry, event is full. Registration closed."}
                </span>
              </h2>

              {/* Score bar */}
              {eventAttendees.length !== 0 ? (
                <>
                  <StackBar
                    maleMember={maleMember}
                    femaleMember={femaleMember}
                    extrovert={extrovert}
                    introvert={introvert}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
