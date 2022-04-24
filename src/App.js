import React from 'react';
import './App.css';
import Navbar from './Components/Pages/Home/Navbar';
import {Switch,Route, BrowserRouter, Redirect} from "react-router-dom"
import Home from './Components/Pages/Home/Home';
import Chardham from './Components/Pages/Places/Chardham';
import Anil from './Components/Pages/Places/Anil';
import Valleryofflower from "./Components/Pages/Places/Valleyofflower"
import Wildlife from "./Components/Pages/Places/Wildlife"
import Footer from "./Components/Pages/Home/Footer"
import Team from "./Components/Pages/Home/Team";
import Rental from './Components/Pages/Home/Rental';
import Contact from "./Components/Pages/Home/Contact"

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
      <Route exact path="/team"component={Team}/>
      <Route exact path="/rental"component={Rental}/>
      <Route exact path="/contact"component={Contact}/>
      <Redirect to="/home" />
    </Switch>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
