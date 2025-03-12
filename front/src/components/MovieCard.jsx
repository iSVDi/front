function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite=btn" onClick={onFavorite}>
          ♡
          </button>
        </div>
      </div>
      <div className="movie-title">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

function onFavorite() {
  alert("Clicked");
}


export default MovieCard