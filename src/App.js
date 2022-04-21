import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Picktrip from './Components/Picktrip';
import Target from './Components/Target';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Picktrip/>
      <Target/>
    </div>
  );
}

export default App;
