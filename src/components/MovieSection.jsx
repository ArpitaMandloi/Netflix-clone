function MovieSection({ movie, onClose }) {
  if (!movie) {
    return null;
  }
  return (
    <div className="movie-modal">
      {" "}
      <div className="movie-modal-content">
        {" "}
        <button className="close-btn" onClick={onClose}>
          {" "}
          ✕{" "}
        </button>{" "}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="modal-poster"
        />{" "}
        <div className="modal-info">
          {" "}
          <h2>{movie.Title}</h2>{" "}
          <p>
            {" "}
            <strong>Year:</strong> {movie.Year}{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>Type:</strong> {movie.Type}{" "}
          </p>{" "}
          <p>
            {" "}
            <strong>IMDb ID:</strong> {movie.imdbID}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default MovieSection;
