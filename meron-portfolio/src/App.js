import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import Introduction from './Components/Introduction';


const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;