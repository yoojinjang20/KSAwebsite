import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar/>
          <div className="content-wrap">
            {/*put cards here*/}
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
