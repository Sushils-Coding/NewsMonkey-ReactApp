import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const pageSize = 20;
  const apikey = process.env.REACT_APP_NEWS_API;

  const categories = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];

  const [progress, setProgress] = useState(10)

  // const setProgress = (progress) => {
  //   setProgress(progress = progress)
  // }

  return (
    <>
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

    </>
  )

}
export default App;
