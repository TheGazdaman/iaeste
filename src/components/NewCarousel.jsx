import React from 'react';
import Home from './../img/photogrid.jpg';

export default class NewCarousel extends React.Component {
  render(){
    return (
      <img className="intro-image" src= { Home } />
    

      )
    }
}