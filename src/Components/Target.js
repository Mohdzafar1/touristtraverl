import React from 'react'
import cart1 from "../Components/Rental.png"
import cart2 from "../Components/sport.png"
import cart3 from "../Components/Travel.png"


const Target = () => {
  return (
    <div>
      <>
          <div className="container pt-5">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1 className='display-3 fw-bold'>LETS GO ADVENTURES</h1>
                  </div>
              </div>
              <div className="row pt- pb-5">
                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                          <img src={cart3}/>
                      </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                          <img src={cart2}/>
                      </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card"id="cart">
                          <img src={cart1}/>
                      </div>
                  </div>
              </div>
          </div>
      </>
    </div>
  )
}

export default Target
