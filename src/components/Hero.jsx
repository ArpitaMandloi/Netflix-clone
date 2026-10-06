import { useEffect } from "react";
import Navbar from "./Navbar";

function Hero({getMovies}) {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>Money Heist</h1>

        <p>Watch the latest movies and shows.</p>

        <button className="play-btn"> Play</button>
        <button className="trailer-btn" onClick={getMovies}>Get Movies</button>
      </div>

    </section>
  );
}

export default Hero;