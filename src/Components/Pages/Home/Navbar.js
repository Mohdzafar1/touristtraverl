import React from 'react'
import logo from "../../Images/logo12.png"
import { NavLink,Link } from 'react-router-dom'
// import Home from "./Home"
// import Picktrip from "./Picktrip";
// import Target from "./Target"
// import Cart from "./Cart";
// import Ukbeauti from "./Ukbeauti"
// import Video from "./Video"
// import chardham from './Chardham';


const Navbar = () => {
  
  return (
    <div>
      <>
         {/* <header className='header'>
         </header> */}

             <nav className='navbar navbar-expand-md'>
              <div className="container">
               <a to=""className='navbar-brand '><img src={ logo} id="logo"/></a>
               <button className='hamburger navbar-toggler bg-dark' data-bs-toggle="collapse"data-bs-target="#nav">
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>

               </button>
                 <div className= "collapse navbar-collapse text-center justify-content-end"id="nav">
                <ul className= "navbar-nav text-dark">
                <li className='nav-item'><NavLink to="/home"className='nav-link text-dark me-3'id="menu-item">HOME</NavLink></li>
                    
                <li class="nav-item dropdown text-dark">
          <NavLink class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          SPIRITUAL
          </NavLink>
          <ul class="dropdown-menu ">
            <li><Link class="dropdown-item" to="/Chardham"id="menu-item">Char Dham</Link></li>
            <li><NavLink class="dropdown-item " to="#"id="menu-item">Panch Kedar</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Panch Prayag</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Panch Badri</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Hemkund Sahib</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Piran Kaliyar Sharif</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Haridwar</NavLink></li>
            
            
          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <NavLink class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          ADVENTURE
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/anil"id="menu-item">Auli</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Rishikesh</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">New Tehri</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Nainital</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Sattal</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Chopta</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Mussoorie</NavLink></li>
            

          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <NavLink class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          NATURE
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/valleryoffolwer"id="menu-item">Valley of Flowers</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Chaukori</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Kausani</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Nanital</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Mukeshwar</NavLink></li>
            <li><NavLink class="dropdown-item" to="#"id="menu-item">Ranikhet</NavLink></li>
        
          </ul>
                    
               </li> 

               <li class="nav-item dropdown ">
          <NavLink class="nav-link dropdown-toggle text-dark me-3" to="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          WILDLIFE
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="/wildlife">Jim Corbett National Park</NavLink></li>
            <li><NavLink class="dropdown-item" to="#">Nanda Devi National Park</NavLink></li>
            <li><NavLink class="dropdown-item" to="#">Rajaji National Park</NavLink></li>
            <li><NavLink class="dropdown-item" to="#">Gangotri National Park</NavLink></li>
            <li><NavLink class="dropdown-item" to="#">Binsar Wildlife Sanctuary</NavLink></li>
           
          </ul>
                    
               </li> 

                </ul>
               </div>
            
              
              </div>
               </nav>
        

      </>
      
    </div>
   
   
 )
}

export default Navbar
