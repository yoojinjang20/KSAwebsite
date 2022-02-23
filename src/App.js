import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar/>
          <div className="content-wrap">
            <Cards/>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
