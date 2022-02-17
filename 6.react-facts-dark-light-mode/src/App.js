import React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'


function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Main 
          darkMode={darkMode}
        />
    </div>
  );
}

export default App;
