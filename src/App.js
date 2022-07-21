import logo from './logo.svg';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Movie from './components/Movie';
// Styles
import { GlobalStyle } from './globalStyle.js';


function App() {
  return (
    <Router>
      <div className="App" >
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<Movie />} />
        </Routes>
      </div>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
