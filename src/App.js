import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Grid from './components/Grid'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css';


const styles = makeStyles({
  wrapper:{
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "10rem",
  },

  littleSpace: {
    marginTop: "8rem",

  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },


})

const theme = createMuiTheme ({
  
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '1rem',
    },
  },

});

function App() {
  const classes= styles();

  
  return (
    
    <div className="App">
    <div className="content-wrap">
      <NavBar/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
