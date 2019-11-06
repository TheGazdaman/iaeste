import React from 'react';
import Navbar from './Navbar.jsx';
import NewCarousel from './NewCarousel.jsx';
import Topbar from './Topbar.jsx'
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <Navbar />
        <NewCarousel />
        <Testimonials />
        <Footer />
      </>
    )
   
  }
}