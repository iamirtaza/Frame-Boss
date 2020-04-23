import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Section1 from './Components/Sections/Section1'
import Section2 from './Components/Sections/Section2'
import Section3 from './Components/Sections/Section3'
import Section4 from './Components/Sections/Section4'
import Section5 from './Components/Sections/Section5'
import Section6 from './Components/Sections/Section6'
import Section7 from './Components/Sections/Section7'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  );
}

export default App;
