// ===================================================================
// Favorites.jsx
// Favorites page of the React Movie App.
//
// Page routing lets the user move between different pages
// in the React app without reloading the whole website.
//
// Routing and navigate are related, but they are not the same.
//
// Routing → decides which component should be shown for each URL.
// navigate() → moves the user to another route.
//
// Simple meaning:
//
// "/"           → Home.jsx
// "/favorites"  → Favorites.jsx
// ===================================================================


// Import CSS styles for the Favorites page.
import "../css/Favorites.css";


// Import useMovieContext.
// This allows Favorites.jsx to access shared movie data from MovieContext.
import { useMovieContext } from "../contexts/MovieContext";


// Import MovieCard.
// We use it to display favorite movies.
import MovieCard from "../components/MovieCard";



// Create the Favorites component.
function Favorites() {

    // Get the favorites array from MovieContext.
    //
    // favorites → contains all movies added to favorites.
    //
    // useMovieContext() → gives us access to the shared Context values.
    const { favorites } = useMovieContext();


    // Check if there is at least one favorite movie.
    //
    // favorites.length > 0
    // → the favorites array is not empty.
    if (favorites.length > 0) {

        // Show the favorite movies.
        return (
            <div className="favorites">

                {/* Favorites page title */}
                <h2>Your Favorites</h2>

                {/* Container for favorite movie cards */}
                <div className="movies-grid">

                    {/*
                      map() goes through every movie
                      in the favorites array.

                      For each movie,
                      React creates one MovieCard component.

                      movie={movie}
                      → sends the movie object to MovieCard as a prop.

                      key={movie.id}
                      → gives each MovieCard a unique identifier.
                    */}

                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}

                </div>

            </div>
        );
    }


    // Show this when there are no favorite movies.
    return (
        <div className="favorites-empty">

            {/* Favorites page title */}
            <h2>No Favorite Movie Yet</h2>

            {/* Message for the user */}
            <p>Start adding movies to your favorites and they will appear here!</p>

        </div>
    );
}


// We did not install React Router at first because basic React does not need it.
// We installed react-router-dom when we needed page routing and navigation.


// Export Favorites so it can be imported and used in App.jsx.
export default Favorites;