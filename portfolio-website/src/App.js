import React from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
