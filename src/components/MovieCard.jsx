// Import CSS styles for the MovieCard component.
import "../css/MovieCard.css";

// Import the custom Movie Context hook.
// This gives MovieCard access to favorite movie functions and data.
import { useMovieContext } from "../contexts/MovieContext";


// Create the MovieCard component.
// This component receives one movie object as a prop.
function MovieCard({ movie }) {

  // Get favorite functions from MovieContext.
  //
  // isFavorite → checks if the movie is already a favorite.
  // addToFavorites → adds a movie to favorites.
  // removeFromFavorites → removes a movie from favorites.
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  // Check if the current movie is already a favorite.
  // favorite will be true or false.
  const favorite = isFavorite(movie.id);


  // This function runs when the favorite button is clicked.
  function onFavoriteClick(e) {

    // Prevent the default browser behavior.
    e.preventDefault();

    // If the movie is already a favorite, remove it.
    if (favorite) {
      removeFromFavorites(movie.id);
    }

    // Otherwise, add the movie to favorites.
    else {
      addToFavorites(movie);
    }
  }


  // Return the JSX displayed in the browser.
  return (

    // Main container for one movie card.
    <div className="movie-card">


      {/* Container for the movie poster */}
      <div className="movie-poster">


        {/* Display the movie poster from TMDB */}
        {/* movie.poster_path → poster path received from the TMDB API */}
        {/* movie.title → alternative text for the image */}
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />


        {/* Overlay displayed on top of the movie poster */}
        <div className="movie-overlay">


          {/* Favorite button */}

          {/* favorite === true → add "active" CSS class */}

          {/* favorite === false → do not add "active" class */}

          {/* onClick → runs onFavoriteClick when clicked */}
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>


        </div>

      </div>


      {/* Container for movie information */}
      <div className="movie-info">


        {/* Display the movie title */}
        <h3>{movie.title}</h3>


        {/* Display only the year from the release date */}

        {/* Example: "2026-09-03" → "2026" */}

        {/* ?. prevents an error if release_date does not exist */}

        {/* split("-")[0] gets the first part before "-" */}
        <p>{movie.release_date?.split("-")[0]}</p>


      </div>


    </div>
  );
}


// Export MovieCard so it can be used in other files,
// for example Home.jsx.
export default MovieCard;