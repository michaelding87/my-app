import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import iconBlack from './images/icon_black.png';
import iconBlue from './images/icon_blue.png';
import iconGrey from './images/icon_grey.png';
import iconRed from './images/icon_red.png';
import Sessions from './Sessions';
import Workouts from './Workouts';
import Tunes from './Tunes';
import AboutUs from './AboutUs';

const panel1 = {
  name: "Sessions",
  imageLocation: iconRed,
  link: "/sessions"
};

const panel2 = { ...panel1, name: "Workouts", imageLocation: iconGrey, link:"/workouts" };
const panel3 = { ...panel1, name: "Tunes", imageLocation: iconBlue, link: "/tunes" };
const panel4 = { ...panel1, name: "About Us", imageLocation: iconBlack, link: "/aboutus" };

let panels = [panel1, panel2, panel3, panel4];

function Home() {
  return (
    <div className="home-container">
      <div className="panels-container">
        {panels.map((panel, index) => (
          <div key={index} className="panel">
            <div className="icon-container">
              <Link to={panel.link}>
                <img
                  className="navigation"
                  src={panel.imageLocation}
                  alt={'Photo of ' + panel.name}
                />
                <div className="overlay">
                  <div className="overlay-text">{panel.name}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<SessionsWrapper />} />
        <Route path="/workouts" element={<WorkoutsWrapper />} />
        <Route path="/tunes" element={<TunesWrapper />} />
        <Route path="/aboutus" element={<AboutUsWrapper />} />
      </Routes>
    </div>
  );
}

function SessionsWrapper() {
  return (
    <div className="content-container">
      <Sessions />
    </div>
  );
}

function WorkoutsWrapper() {
  return (
    <div className="content-container">
      <Workouts />
    </div>
  );
}

function TunesWrapper() {
  return (
    <div className="content-container">
      <Tunes />
    </div>
  );
}

function AboutUsWrapper() {
  return (
    <div className="content-container">
      <AboutUs />
    </div>
  );
}

export default App;
