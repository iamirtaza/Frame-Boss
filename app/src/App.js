import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Section1 from './Components/Section1'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Footer/>
    </div>
  );
}

export default App;
