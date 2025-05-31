import './App.css';
import React, { useState, createContext } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Create ThemeContext
export const ThemeContext = createContext();

const App = () => {

  const pageSize = 20;
  const apikey = process.env.REACT_APP_NEWS_API;

  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  const [progress, setProgress] = useState(10)
  const [theme, setTheme] = useState('light');

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.className = theme === 'light' ? 'dark-theme' : 'light-theme';
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
          <NavBar />
          {/* <News pageSize={20} country="in" category= 'health' /> */}
          {/* <LoadingBar
              height={3}
              color='#f11946'
              // progress={10}
              progress={progress}
              
            /> */}
          <Routes>
            <Route path='/'
              element={<News apikey={apikey} setProgress={setProgress} pageSize={pageSize} country='us' category='General' />} />

            {categories.map((elem) => {
              return <Route key={elem} exact
                path={`/${elem}`}
                element={<News apikey={apikey} setProgress={setProgress} key={elem} pageSize={pageSize} country="us" category={elem} />} />
            })}

          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )

}
export default App;
