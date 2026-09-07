// Import StrictMode from React.
// StrictMode helps find possible problems during development.
import { StrictMode } from 'react'

// Import createRoot to connect React to the HTML page.
import { createRoot } from 'react-dom/client'

// Import BrowserRouter to enable page routing in the React app.
import { BrowserRouter } from 'react-router-dom'

// Import global CSS styles.
import './css/index.css'

// Import the main App component.
import App from './App.jsx'


// Find the HTML element with id="root" and start the React application.
createRoot(document.getElementById('root')).render(

  // StrictMode helps check the React code during development.
  <StrictMode>

    {/* BrowserRouter enables routing and navigation inside App */}
    {/* basename tells React Router that the app is hosted inside /react-movie-app/ on GitHub Pages */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      {/* Display the main App component */}
      <App />

    </BrowserRouter>

  </StrictMode>
)