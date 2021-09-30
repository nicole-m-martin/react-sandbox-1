import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

// Starting with class based components 
class App extends Component {
  render() {
    return (
      <Navbar title='Github Finder' icon='fab fa-github' /> 
    );
  } 
}

export default App;
