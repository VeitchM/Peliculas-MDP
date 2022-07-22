import logo from './logo.svg';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Movie from './components/Movie';
import Cines from './components/Cines'
import Cine from './components/Cine'
import PeliculasPorDia from './components/PeliculasPorDia';
import Bottom from './components/Bottom';

// Styles
import { GlobalStyle } from './globalStyle.js';


function App() {
  return (
    <Router>
      <div className="App" >
        <Header />

        <Routes>
          <Route path='/Cartelera' element={<Home />} />
          <Route path='/Cines' element={<Cines />} />
          <Route path='/CinesdelPaseo' element={<Cine name='Cines del Paseo' />} />
          <Route path='/Aldrey' element={<Cine name='Aldrey' />} />
          <Route path='/LosGallegos' element={<Cine name='Cinema Los Gallegos Shopping' />} />
          <Route path='/Ambassador' element={<Cine name='Ambassador' />} />
          <Route path='/Peliculas por Dia' element={<PeliculasPorDia />} />
          <Route path='/' element={<Home />} />
          <Route path='/movies/:movieId' element={<Movie />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Bottom/>
      </div>
      <GlobalStyle />
    </Router>
  );
}

export default App;
