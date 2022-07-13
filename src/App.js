import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
// Styles
import {GlobalStyle} from './globalStyle.js';


function App() {
  return (
    <div className="App" >
      <GlobalStyle />
      <Header/>
      <Home />
    </div>
  );
}

export default App;
