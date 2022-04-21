import React from 'react'
import bg from "../Components/bg.jpg"

const Picktrip = () => {
  return (
    <div className='pt-0'id="bg">
       
       <div className="container pt-5 pb-5" >
           <div className="row justify-content-center">
               <div className="col-lg-4">
                  <select className='form-select'>
                  <option selected>Itineraries</option>
                  <option value="1">Almora</option>
                  <option value="1">U.S Nagar</option>
                  <option value="1">Pihtoragarh</option>
                  </select>
               </div>
               <div className="col-lg-4">
                  <select className='form-select'>
                  <option selected>Experience</option>
                  <option value="1">Almora</option>
                  <option value="1">U.S Nagar</option>
                  <option value="1">Pihtoragarh</option>
                  </select>
               </div>
               <div className='col-lg-2'>
                   <button className='btn btn-outline-dark'>Submit</button>
               </div>
           </div>
       </div>
     

    </div>
  )
}

export default Picktrip