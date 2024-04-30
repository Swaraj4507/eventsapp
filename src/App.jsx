// import ButtonGradient from "./assets/svg/ButtonGradient";
import React, { useState, useEffect } from "react";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Button from "./components/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddEvent from "./components/AddEvent";
import EventsTest from "./components/EventsTest";
import Events from "./components/Events";
import Demo from "./components/Demo";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import FullEventInfo from "./components/FullEventInfo";
import Filter from "./components/Filter";
import Events2 from "./components/Events2";
const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <>
      <Router>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header userLoggedIn={userLoggedIn} />
          <Routes>
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/" element={<Hero />} />
            {/* <Benefits /> <Events />*/}
            <Route path="/events" element={<Benefits />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/filteredevents" element={<Events2 />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/event/:eventId" element={<FullEventInfo />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
