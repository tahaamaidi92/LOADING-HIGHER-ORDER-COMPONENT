import React, { Component } from 'react';
import './App.css';
import HOC from './components/HOC'
class App extends Component {

  render() { 
    return ( 
      <div className="App">
      <HOC/>
      </div>
    );
  }
}
 
export default App;