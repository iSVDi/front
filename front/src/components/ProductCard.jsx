import "../css/ProductCard.css";

function ProductCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.thumbnail} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite=btn" onClick={onFavorite}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-title">
        <h3>{movie.title}</h3>
        <p>{movie.price}</p>
      </div>
    </div>
  );
}

function onFavorite() {
  alert("Clicked");
}

export default ProductCard;
