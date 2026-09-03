// TMDB API key loaded from the .env file.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Main TMDB API address.
const BASE_URL = "https://api.themoviedb.org/3";


// Get popular movies from TMDB.
export const getPopularMovies = async () => {

    // Send a request to the TMDB popular movies endpoint.
    // sends the request to TMDB.
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

    // Convert the API response from JSON into a JavaScript object.
    // converts TMDB's response into a JavaScript object.
    const data = await response.json();

    // Return the complete API response.
    // The movie array is inside data.results.
    return data;
};


// Search movies using text entered by the user.
export const searchMovies = async (query) => {

    // Send the search text to the TMDB search endpoint.
    // simply makes the user's search text safe to put inside a URL. For example: The Godfather becomes The%20Godfather.
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    // Convert the API response into a JavaScript object.
    const data = await response.json();

    // Return the complete search response.
    // The matching movies are inside data.results.
    return data;
};