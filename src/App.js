import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

// Starting with class based components 
class App extends Component {
  render() {
    // const name = 'Lara Croft';
    // const loading = false;
    return (
      <Navbar />
      // <div className="App">
      // {/* Ternary */}
      //   {loading ? <h4>Loading....</h4> : <h1>Hello {name.toUpperCase()}</h1>}
      // </div>
    );
  } 
}

export default App;
