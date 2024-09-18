import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SignupBanner from "../component/HomepageCom/SignupBanner";
import { Link } from "react-router-dom";
import EventDiv from "../component/HomepageCom/EventDiv";
import AuthUser from "../component/AuthUser";
import Reminder from "../component/HomepageCom/Reminder";
import HomeSearchBar from "../component/HomepageCom/HomeSearchBar";

function HomePage({ eventInfo }) {
  const isUserLoggedIn = AuthUser();

  return (
    <div>
      {/* Banner */}
      <section className="relative bg-center bg-no-repeat bg-[url('https://static.kent.ac.uk/media/news/2023/01/friends-e1673879447665.jpg')] bg-gray-400 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
          <h1 className="mb-4 text-6xl font-['Caveat'] font-extrabold leading-none text-white md:text-6xl lg:text-8xl">
            Let's Get Party!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Join our vibrant community and explore a world of diverse activities
            together.
          </p>
          <HomeSearchBar />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            {!isUserLoggedIn && (
              <Link to="/signup">
                <button className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-300 hover:bg-amber-400">
                  Sign Up
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* Hide with login */}
      {!isUserLoggedIn && <SignupBanner />}
      {/* Category Text */}
      <div className="p-4 h-auto mx-auto text-center bg-amber-50/80">
        <p className="mb-3 text-3xl font-['Caveat'] font-normal text-amber-400 ">
          Our Services
        </p>
        <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">
          Join Activity and Meet Your Buddies
        </h5>
        {/* Category */}
        <NavBar />
      </div>
      {isUserLoggedIn && <Reminder eventInfo={eventInfo} />}

      {/* Activity column 1*/}
      <div>
        <div className="px-8 py-2 flex justify-between items-center">
          <h4 className=" text-xl font-bold mt-2 mb-2">New Activities</h4>
          <Link to="/list">
            <button className=" text-sm mt-2 mb-2 inline-flex justify-center items-center text-gray-600 hover:border-b hover:border-gray-400">
              More
              <svg
                className="rtl:rotate-180 w-2 h-2 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" // Updated attribute name
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="px-8 flex justify-between flex-row flex-wrap ">
          {eventInfo.slice(-4).map((event, index) => (
            <EventDiv key={index} categoryData={event} />
          ))}
        </div>
      </div>
      {/* Activity column 2*/}
      <div>
        <div className="px-8 py-2 flex justify-between items-center">
          <h4 className=" text-xl font-bold mt-2 mb-2">Upcoming Activities</h4>
          <Link to="/list">
            <button className=" text-sm mt-2 mb-2 inline-flex justify-center items-center text-gray-600 hover:border-b hover:border-gray-400">
              More
              <svg
                className="rtl:rotate-180 w-2 h-2 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" // Updated attribute name
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="px-8 flex justify-between flex-row flex-wrap ">
          {eventInfo
            .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
            .slice(0, 4)
            .map((event, index) => (
              <EventDiv key={index} categoryData={event} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
