// Import Link from React Router.
// Link lets us move between pages without reloading the whole website.
import { Link } from "react-router-dom";

// Import CSS styles for the NavBar component.
// "../" means go one folder back from components to src.
import "../css/NavBar.css";


// Create the NavBar component.
function NavBar() {

  // Return the navigation bar shown in the browser.
  return (
    <nav className="navbar">

      {/* App name / brand */}
      <div className="navbar-brand">

        {/* Click "Movie App" → go to Home page */}
        <Link to="/">Movie App</Link>

      </div>


      {/* Navigation links */}
      <div className="navbar-links">

        {/* Click "Home" → go to Home page */}
        <Link to="/" className="nav-link">Home</Link>

        {/* Click "Favorites" → go to Favorites page */}
        <Link to="/favorites" className="nav-link">Favorites</Link>

      </div>

    </nav>
  );
}


// Export NavBar so App.jsx can import and use it.
export default NavBar;