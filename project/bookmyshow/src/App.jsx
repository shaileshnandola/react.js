import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Components
import Header from "./component/Header";
import Menu from "./component/Menu";
import Slider from "./component/Slider";
import Movie from "./component/Movie";
import Image from "./component/Image";
import Event from "./component/Event";
import Section from "./component/Section";
import Concerts from "./component/Concerts";
import Outdoor from "./component/Outdoor";
import Therapy from "./component/Therapy";
import Popular from "./component/Popular";
import Play from "./component/Play";

// Static navigation data
const navData = {
  categories: ["Movies", "Stream", "Events", "Plays", "Sports", "Activities"],
  links: ["ListYourShow", "Corporates", "Offers", "Gift Cards"]
};

function App() {
  const [navbar, setNavbar] = useState([]);
  const [slid, setSlid] = useState([]);
  const [movies, setMovies] = useState([]);
  const [imag, setImg] = useState([]);
  const [events, setEvents] = useState([]);
  const [sect, setSect] = useState([]);
  const [mus, setMus] = useState([]);
  const [out, setOut] = useState([]);
  const [ther, setTher] = useState([]);
  const [pop, setPop] = useState([]);
  const [ply, setPly] = useState([]);
  const [visible, setVisible] = useState("");

  // Individual fetch functions
  const fetchNavbar = async () => {
    const res = await fetch("http://localhost:8000/navbar");
    const data = await res.json();
    setNavbar(data);
  };

  const fetchSlider = async () => {
    const res = await fetch("http://localhost:8000/slider");
    const data = await res.json();
    setSlid(data);
  };

  const fetchMovies = async () => {
    const res = await fetch("http://localhost:8000/recommendedMovies");
    const data = await res.json();
    setMovies(data);
  };

  const fetchBanner = async () => {
    const res = await fetch("http://localhost:8000/banner");
    const data = await res.json();
    setImg(data);
  };

  const fetchEvents = async () => {
    const res = await fetch("http://localhost:8000/event");
    const data = await res.json();
    setEvents(data);
  };

  const fetchSection = async () => {
    const res = await fetch("http://localhost:8000/Section");
    const data = await res.json();
    setSect(data);
  };

  const fetchConcerts = async () => {
    const res = await fetch("http://localhost:8000/concerts");
    const data = await res.json();
    setMus(data);
  };

  const fetchOutdoor = async () => {
    const res = await fetch("http://localhost:8000/outdoorEvents");
    const data = await res.json();
    setOut(data);
  };

  const fetchTherapy = async () => {
    const res = await fetch("http://localhost:8000/Therapy");
    const data = await res.json();
    setTher(data);
  };
  const fetchpopular = async () => {
    const res = await fetch("http://localhost:8000/popular-events");
    const data = await res.json();
    setPop(data);
  };
  const fetchplay = async () => {
    const res = await fetch("http://localhost:8000/plays");
    const data = await res.json();
    setPly(data);
  };

  const loadAllData = () => {
    fetchNavbar();
    fetchSlider();
    fetchMovies();
    fetchBanner();
    fetchEvents();
    fetchSection();
    fetchConcerts();
    fetchOutdoor();
    fetchTherapy();
    fetchpopular();
    fetchplay();
  };

  // On button click
  const handleButtonClick = (sectionName) => {
    if (!navbar.length) {
      loadAllData(); // only on first click
    }
    setVisible(sectionName);
  };

  return (
    <div className="text-center">
      <Header head={navbar} />
      <Menu navigation={navData} />

      <div className="my-4">
        <button className="btn btn-dark mx-2" onClick={() => handleButtonClick("all")}>
          Show All
        </button>
        <button className="btn btn-primary mx-2" onClick={() => handleButtonClick("movies")}>
          Show Movies
        </button>
        <button className="btn btn-success mx-2" onClick={() => handleButtonClick("events")}>
          Show Events
        </button>
        <button className="btn btn-warning mx-2" onClick={() => handleButtonClick("concerts")}>
          Show Concerts
        </button>
        <button className="btn btn-info mx-2" onClick={() => handleButtonClick("out")}>
          Show Outdoor
        </button>
        <button className="btn btn-info mx-2" onClick={() => handleButtonClick("ply")}>
          Show play
        </button>

      </div>

      {/* Conditionally render sections */}
      {visible === "movies" && <Movie movielist={movies} />}
      {visible === "events" && <Event eventlist={events} />}
      {visible === "concerts" && <Concerts musiclist={mus} />}
      {visible === "out" && <Outdoor outlist={out} />}
      {visible === "ply" && <Play plylist={ply} />}
      {visible === "all" && (
        <>
          <Slider sliderlist={slid} />
          <Movie movielist={movies} />
          <Image imglist={imag} />
          <Event eventlist={events} />
          <Section sectionlist={sect} />
          <Concerts musiclist={mus} />
          <Outdoor outlist={out} />
          <Therapy therlist={ther} />
          <Popular poplist={pop} />
          <Play plylist={ply} />
        </>
      )}
    </div>
  );
}

export default App;
