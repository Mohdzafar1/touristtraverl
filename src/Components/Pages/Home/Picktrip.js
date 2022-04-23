import React from 'react'
// import bg from "../Components/Images/bg.jpg"

const Picktrip = () => {
  return (
    <div className='pt-0'id="bg">
       
       <div className="container pt-5 pb-5" >
       <div className="row text-center">
         <div className="col-lg-12">
           <h1 className='fw-bold display-3'>PICK A TRIP</h1>
         </div>
       </div>
           <div className="row justify-content-center">
               <div className="col-lg-4 pt-3 pb-3">
                  <select className='form-select'>
                  <option selected>Itineraries</option>
                  <option value="1">Almora</option>
                  <option value="1">BARRINATH</option>
                  <option value="1">BINSAR</option>
                  <option value="1">DHANAULT</option>
                  <option value="1">GANGATRI</option>
                  <option value="1">HARIWAR</option>
                  <option value="1">KEDARNATH</option>
                  <option value="1">KHIRSU</option>
                  <option value="1">LAKHAMANDAL</option>
                  <option value="1">MUSSERRIE</option>
                  <option value="1">PAURI</option>
                  <option value="1">RAJAJI NATIONAL PARK</option>
                  <option value="1">RISHIKESH</option>
                  <option value="1">TEHRI LAKE</option>
                  <option value="1">VALLEY OF FLOWER</option>
                  <option value="1">YAMUNATRI</option>




                  </select>
               </div><br></br>
               <div className="col-lg-4 pt-3 pb-3">
                  <select className='form-select'>
                  <option selected>Experience</option>
                  <option value="1">Almora</option>
                  <option value="1">U.S Nagar</option>
                  <option value="1">Pihtoragarh</option>
                  </select><br></br>
               </div>
               <div className='col-lg-2 pt-3 pb-3'>
                   <button className='btn btn-outline-light'>Submit</button>
               </div>
           </div>
       </div>
     

    </div>
  )
}

export default Picktrip