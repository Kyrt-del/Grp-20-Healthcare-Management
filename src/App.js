import React from 'react'
import './App.css';
import Header from './components/main-header'
import Navbar from './components/navbar';
import About from'./components/About-us';
import Func from './components/functionalities';
import Precautions from './components/Precautions';
import Testimonials from './components/Testimonials'
import Contact from './components/contact Us'
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Func />
      <About />
      <Precautions/>
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
