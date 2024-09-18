import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SportsPage from "./pages/SportsPage";
import BoardgamesPage from "./pages/BoardgamesPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import HobbiesPage from "./pages/HobbiesPage";
import BusinessPage from "./pages/BusinessPage";
import MbtiPage from "./pages/MbtiPage";
import ContentPage from "./pages/ContentPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import MbtiIntrovert from "./pages/MbtiIntrovert";
import MbtiExtrovert from "./pages/MbtiExtrovert";
import SuccessPage from "./pages/SuccessPage";
import PaymentPage from "./pages/PaymentPage";
import HomeSearchPage from "./pages/HomeSearchPage";

function App() {
  const [eventInfo, setEventInfo] = useState([]); // store all event Info
  const [eventSports, setEventSports] = useState([]); //store sports category
  const [eventBoardgames, setEventBoardgames] = useState([]); //store boardgames category
  const [eventWorkshops, setEventWorkshops] = useState([]); //store workshops category
  const [eventHobbies, setEventHobbies] = useState([]); //store hobbies category
  const [eventBusiness, setEventBusiness] = useState([]); //store business category
  const [eventmbti, setEventmbti] = useState([]); //store mbti category

  const eventAPI = process.env.REACT_APP_API_URL;

  async function getEventInfo() {
    try {
      const res = await fetch(eventAPI);
      const result = await res.json();
      setEventInfo(result);
    } catch (err) {
      console.log("result err: ", err);
    }
  }

  useEffect(() => {
    getEventInfo();
  }, []);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  // Filter Sports category
  useEffect(() => {
    setEventSports(
      eventInfo.filter((event) => event.event_catagory === "sports")
    );
  }, [eventInfo]);

  // Filter boardgames category
  useEffect(() => {
    setEventBoardgames(
      eventInfo.filter((event) => event.event_catagory === "board_games")
    );
  }, [eventInfo]);

  // Filter workshops category
  useEffect(() => {
    setEventWorkshops(
      eventInfo.filter((event) => event.event_catagory === "workshops")
    );
  }, [eventInfo]);

  // Filter hobbies category
  useEffect(() => {
    setEventHobbies(
      eventInfo.filter((event) => event.event_catagory === "hobbies")
    );
  }, [eventInfo]);

  // Filter business category
  useEffect(() => {
    setEventBusiness(
      eventInfo.filter((event) => event.event_catagory === "business")
    );
  }, [eventInfo]);

  // Filter mbti category
  useEffect(() => {
    const introvertEvents = eventInfo.filter(
      (event) =>
        event.event_tags &&
        event.event_tags.length > 0 &&
        event.event_tags[0] === "introvert"
    );
    const extrovertEvents = eventInfo.filter(
      (event) =>
        event.event_tags &&
        event.event_tags.length > 0 &&
        event.event_tags[0] === "extrovert"
    );

    setEventmbti({
      introvert: introvertEvents,
      extrovert: extrovertEvents,
    });
  }, [eventInfo]);

  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage eventInfo={eventInfo} />} />
          <Route
            path="/homesearch"
            element={<HomeSearchPage eventInfo={eventInfo} />}
          />
          <Route path="/list" element={<ListPage eventInfo={eventInfo} />} />
          <Route
            path="/sports"
            element={<SportsPage eventSports={eventSports} />}
          />
          <Route
            path="/board_games"
            element={<BoardgamesPage eventBoardgames={eventBoardgames} />}
          />
          <Route
            path="/workshops"
            element={<WorkshopsPage eventWorkshops={eventWorkshops} />}
          />
          <Route
            path="/hobbies"
            element={<HobbiesPage eventHobbies={eventHobbies} />}
          />
          <Route
            path="/business"
            element={<BusinessPage eventBusiness={eventBusiness} />}
          />
          <Route path="/mbti" element={<MbtiPage eventmbti={eventmbti} />} />
          <Route
            path="/mbti_introvert"
            element={<MbtiIntrovert eventmbti={eventmbti} />}
          />
          <Route
            path="/mbti_extrovert"
            element={<MbtiExtrovert eventmbti={eventmbti} />}
          />
          <Route
            path="/content/:eventId"
            element={<ContentPage eventInfo={eventInfo} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/success=true" element={<SuccessPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
