import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect} from 'react';

function App() {
 
    
    
    useEffect(() => {
        console.log("reloaded")
        document.body.scrollTop = 0;
      }, [])

return (
  <div className="App">
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);
}

export default App;
