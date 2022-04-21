import React from 'react'
import logo from "../Components/logo1.png"

const Navbar = () => {
  return (
    <div>
      <>
         <header className='header'>
         </header>

             <nav className='navbar navbar-expand-md'>
              <div className="container-fluid">
               <a href=""className='navbar-brand '><img src={ logo} id="logo"/></a>
               <button className='hamburger navbar-toggler bg-dark' data-bs-toggle="collapse"data-bs-target="#nav">
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>

               </button>
                 <div className= "collapse navbar-collapse text-center justify-content-center"id="nav">
                <ul className= "navbar-nav text-dark">
                <li className='nav-item'><a href=""className='nav-link text-dark'>HOME</a></li>
                    
                <li class="nav-item dropdown text-dark">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          SPIRITUAL
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          ADVENTURE
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
          </ul>
                    
               </li> 

               <li class="nav-item dropdown text-light">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          NATURE
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
          </ul>
                    
               </li> 

               <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle text-dark " href="#" id="navbarDropdown"  data-bs-toggle="dropdown">
          WILDLIFE
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">1</a></li>
            <li><a class="dropdown-item" href="#">2</a></li>
            <li><a class="dropdown-item" href="#">3</a></li>
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
