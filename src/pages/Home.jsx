// =================================================
// Home.jsx
// Home page of the React Movie App.
// =================================================

// Home renders first with an empty movies array.
// useEffect then fetches movies from TMDB.
// When setMovies() saves the API results into state,
// React re-renders Home and displays the MovieCard components.


// Import MovieCard to display each movie.
import MovieCard from "../components/MovieCard";


// Import React hooks.
//
// useState → stores and updates data inside the component.
// useEffect → runs side effects such as fetching API data.
import { useState, useEffect } from "react";


// =================================================
// Because in api.js you wrote:
//
// export const getPopularMovies = ...
// export const searchMovies = ...
// =================================================

// { } are used because searchMovies and getPopularMovies are named exports.
//
// searchMovies → searches movies using the user's query.
// getPopularMovies → gets popular movies from TMDB.
import { searchMovies, getPopularMovies } from "../services/api";


// Import CSS styles for the Home page.
import "../css/Home.css";



// Create the Home component.
function Home() {


  // =================================================
  // SEARCH STATE
  // =================================================

  // searchQuery = current text in the search input.
  // setSearchQuery = updates the search text.
  // "" = initial value is an empty string.
  const [searchQuery, setSearchQuery] = useState("");



  // =================================================
  // MOVIES STATE
  // =================================================

  // movies = current list of movies.
  // setMovies = updates the movie list.
  // [] = initial value is an empty array.
  //
  // When setMovies changes the state,
  // React re-renders Home and displays the updated movies.
  const [movies, setMovies] = useState([]);



  // =================================================
  // ERROR STATE
  // =================================================

  // error = current error message.
  // setError = updates the error message.
  // null = initially there is no error.
  const [error, setError] = useState(null);



  // =================================================
  // LOADING STATE
  // =================================================

  // loading = current loading status.
  // setLoading = changes the loading status.
  // true = initially we are waiting for the API.
  const [loading, setLoading] = useState(true);



  // =================================================
  // LOAD POPULAR MOVIES
  // =================================================

  // useEffect runs after the component is first displayed.
  useEffect(() => {


    // Create an async function for loading popular movies.
    const loadPopularMovies = async () => {


      // try → try to fetch movie data from TMDB.
      try {

        // Wait for getPopularMovies() to return the API response.
        const popularMovies = await getPopularMovies();


        // TMDB stores the movie array inside "results".
        // Save those movies into state.
        setMovies(popularMovies.results);


        // Clear an old error if the request succeeds.
        setError(null);


      } catch (err) {

        // catch → runs if the API request fails.

        // Show the real error in the console.
        console.log(err);

        // Save an error message in state.
        setError("Failed to fetch popular movies.");


      } finally {

        // finally → always runs whether try succeeds or fails.

        // The API request is finished.
        setLoading(false);

      }

    };


    // Call the function.
    loadPopularMovies();


  }, []);


  // [] → empty dependency array.
  // This effect runs when the component first loads.



  // =================================================
  // SEARCH MOVIES
  // =================================================

  // This function runs when the search form is submitted.
  const handleSearch = async (e) => {


    // Prevent the browser from refreshing the page.
    e.preventDefault();


    // trim() removes extra spaces.
    // If the search is empty, stop the function.
    if (!searchQuery.trim()) return;


    // If an API request is already loading, stop the function.
    if (loading) return;


    // Start loading while waiting for the search API.
    setLoading(true);


    try {

      // Send searchQuery to TMDB and wait for the response.
      const searchResults = await searchMovies(searchQuery);


      // The search movie array is inside searchResults.results.
      // Save those movies into the movies state.
      setMovies(searchResults.results);


      // Clear any previous error message.
      setError(null);


    } catch (err) {

      // Show the real error in the console.
      console.log(err);


      // Save an error message.
      setError("Failed to fetch search movies.");


    } finally {

      // The search API request is finished.
      setLoading(false);

    }


    // Previous tutorial code kept for reference:

    // Show the search value.
    // alert(searchQuery);

    // Clear the search input.
    // setSearchQuery("");

  };



  // =================================================
  // JSX
  // =================================================

  // Return the UI displayed in the browser.
  return (

    // Main container of the Home page.
    <div className="home">


      {/* Search form */}
      <form onSubmit={handleSearch} className="search-form">


        {/* Search input */}
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />


        {/* type="text" → makes a text input */}

        {/* placeholder → shows text before the user types */}

        {/* className → connects the input to CSS */}

        {/* value={searchQuery} → shows the current searchQuery state */}

        {/* onChange → runs whenever the user types */}

        {/* e → the input event */}

        {/* e.target.value → gets the text typed by the user */}

        {/* setSearchQuery(...) → saves that text into state */}


        {/* Search button */}
        <button type="submit" className="search-button">Search</button>


      </form>



      {/* Show this only when error has a value */}
      {error && <div className="error-message">{error}</div>}



      {/*
        Conditional rendering using a ternary operator.

        loading = true
        → show "Loading..."

        loading = false
        → show the movies
      */}

      {loading ? (


        // Show while waiting for the API.
        <div className="loading">Loading...</div>


      ) : (


        // Show after loading is finished.
        <div className="movies-grid">


          {/*
            map() goes through every movie in the movies array.

            For each movie,
            React creates one MovieCard.

            movie.title.toLowerCase()
            → converts the title to lowercase.

            searchQuery.toLowerCase()
            → converts the search text to lowercase.

            startsWith()
            → checks whether the movie title starts with the search text.

            movie={movie}
            → sends the movie object to MovieCard as a prop.

            key={movie.id}
            → gives each MovieCard a unique identifier.
          */}


          {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
          ))}


        </div>


      )}


    </div>
  );
}



// Export Home so it can be imported and used in App.jsx.
export default Home;