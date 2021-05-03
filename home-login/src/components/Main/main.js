import React from 'react'
import Navbar from '../navbar'
import Header from '../main-header'

import About from'../About-us';
import Func from '../functionalities';
import Precautions from '../Precautions';
import Testimonials from '../Testimonials'
import Contact from '../contact Us'
import Footer from '../footer'

/* removed <Header /> 
  was causing issue
*/

const Main = () => {
  return (
    <>
      <Navbar />
      <Func />
      <About />
      <Precautions/>
      <Testimonials/>
      <Contact />
      <Footer />


  </>
  
  );
}

export default Main;