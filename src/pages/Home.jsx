import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieSection from "../components/MovieSection";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Movie card click
  const handleCard = (movie) => {
    setSelectedMovie(movie);
  };

  // Close movie card
  const closeCard = () => {
    setSelectedMovie(null);
  };

  // API call using fetch
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=164a5bb0&s=Batman&type=movie&page=1"
        );

        const data = await response.json();


        setMovies(data.Search || []);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {movies.length > 0 && (
        <section className="movies-section">
          <h2>Movies</h2>

          <div className="movie-row">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onClick={handleCard}
              />
            ))}
          </div>
        </section>
      )}

      <MovieSection
        movie={selectedMovie}
        onClose={closeCard}
      />

      <Login />

      <Footer />
    </>
  );
}

export default Home;