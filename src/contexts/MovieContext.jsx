// ============================================================
// MovieContext.jsx
// This file creates a shared context for favorite movies.
// ============================================================


// Import React hooks.
//
// createContext → creates a Context.
// useContext → allows components to access the Context.
// useState → stores favorite movies.
// useEffect → runs code when something happens or changes.
import { createContext, useContext, useState, useEffect } from "react";



// ============================================================
// CREATE CONTEXT
// ============================================================

// Create a Context for movie data.
const MovieContext = createContext();


// Create a custom hook.
//
// Components can call useMovieContext()
// instead of writing useContext(MovieContext) every time.
export const useMovieContext = () => useContext(MovieContext);



// ============================================================
// MOVIE PROVIDER
// ============================================================

// Create the MovieProvider component.
//
// children → anything placed inside <MovieProvider>.
//
// Example:
//
// <MovieProvider>
//   <App />
// </MovieProvider>
//
// App becomes the "children".
export const MovieProvider = ({ children }) => {


  // ============================================================
  // FAVORITES STATE
  // ============================================================

  // favorites → current list of favorite movies.
  // setFavorites → updates the favorites list.
  // [] → initially the favorites list is empty.
  const [favorites, setFavorites] = useState([]);



  // ============================================================
  // LOAD FAVORITES FROM LOCAL STORAGE
  // ============================================================

  // localStorage lets the browser remember data
  // even after the user refreshes or closes the website.

  // This useEffect runs when MovieProvider first loads.
  useEffect(() => {

    // Get the saved favorites from localStorage.
    const storedFavs = localStorage.getItem("favorites");


    // localStorage stores data as text.
    //
    // JSON.parse()
    // converts the stored text back into a JavaScript array.
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }

  }, []);

  // [] → run only when the component first loads.



  // ============================================================
  // SAVE FAVORITES TO LOCAL STORAGE
  // ============================================================

  // This useEffect runs whenever favorites changes.
  useEffect(() => {

    // JSON.stringify()
    // converts the favorites array into text.
    //
    // localStorage.setItem()
    // saves that text inside the browser.
    localStorage.setItem("favorites", JSON.stringify(favorites));

  }, [favorites]);

  // [favorites] → run whenever favorites changes.



  // ============================================================
  // ADD A MOVIE TO FAVORITES
  // ============================================================

  // movie → the movie we want to add.
  const addToFavorites = (movie) => {

    // prev → previous favorites array.
    //
    // ...prev → copy all old favorites.
    //
    // movie → add the new movie.
    //
    // Example:
    //
    // [movie1, movie2]
    //
    // becomes:
    //
    // [movie1, movie2, movie3]
    setFavorites((prev) => [...prev, movie]);

  };



  // ============================================================
  // REMOVE A MOVIE FROM FAVORITES
  // ============================================================

  // movieId → id of the movie we want to remove.
  const removeFromFavorites = (movieId) => {

    // filter() creates a new array
    // without the movie that has this id.
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));

  };



  // ============================================================
  // CHECK IF A MOVIE IS FAVORITE
  // ============================================================

  const isFavorite = (movieId) => {

    // some() checks whether at least one movie
    // has the same id.
    //
    // Returns:
    //
    // true  → movie is favorite
    // false → movie is not favorite
    return favorites.some((movie) => movie.id === movieId);

  };



  // ============================================================
  // CONTEXT VALUE
  // ============================================================

  // These values/functions will be available
  // to components using useMovieContext().
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };



  // ============================================================
  // PROVIDER
  // ============================================================

  // Give the shared Context values
  // to all components inside MovieProvider.
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );

};