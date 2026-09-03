// 🔅=========================================================
// FIRST SIMPLE REACT EXAMPLE
// This code is commented out and kept only for reference.
// 🔅=========================================================

// import './App.css'

// function App() {
//   const name = 'React'

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   )
// }

// export default App

// 🔅=========================================================
// END OF FIRST SIMPLE REACT EXAMPLE
// 🔅=========================================================



// ============================================================
// ACTIVE IMPORTS
// ============================================================

// Import Routes and Route for page routing.
import { Routes, Route } from 'react-router-dom'

// Import CSS styles for the App component.
import './css/App.css'

// Import the Home page.
import Home from './pages/Home'

// Import the Favorites page.
import Favorites from './pages/Favorites'

// Import the NavBar component.
import NavBar from './components/NavBar'

// Import MovieProvider from MovieContext.
// MovieProvider makes the shared movie state available
// to all components inside it.
import { MovieProvider } from './contexts/MovieContext'



// ============================================================
// MAIN APP COMPONENT
// ============================================================

function App() {

  return (

    // MovieProvider wraps the app.
    // Every component inside MovieProvider can access
    // the shared Movie Context.
    <MovieProvider>

      <div>

        {/* NavBar can access Movie Context */}
        <NavBar />


        {/* Main content of the application */}
        <main className="main-content">


          {/* Routes decides which page should be displayed based on the URL */}
          <Routes>


            {/* "/" → show the Home page */}
            <Route path="/" element={<Home />} />


            {/* "/favorites" → show the Favorites page */}
            <Route path="/favorites" element={<Favorites />} />

           {/* it should be close */}
          </Routes>


        </main>

      </div>
     {/* it should be close */}
    </MovieProvider>
  )
}



// ============================================================
// EXPORT
// ============================================================

// Export App so main.jsx can import and render it.
export default App