import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Switch,Route, BrowserRouter, Redirect} from "react-router-dom"
import Home from './Components/Home';
import Chardham from './Components/Chardham';
import Anil from './Components/Anil';
import Valleryofflower from "./Components/Valleyofflower"
import Wildlife from "./Components/Wildlife"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/home"component={Home}/>
      <Route  exact path ="/Chardham" component={Chardham}/>
      <Route  exact path ="/anil" component={Anil}/>
      <Route exact path ="/valleryoffolwer"component={Valleryofflower}/>
      <Route exact path ="/wildlife"component={Wildlife}/>
      <Redirect to="/home" />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
