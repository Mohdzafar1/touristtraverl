import React from 'react'
import cart1 from "../Components/Rental.png"
import cart2 from "../Components/sport.png"
import cart3 from "../Components/travel logo.png"


const Target = () => {
  return (
    <div>
      <>
          <div className="container pt-5">
              <div className="row pt- pb-5">
                  <div className="col-lg-4 pt-3">
                      <div className="card">
                          <img src={cart3}/>
                      </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card">
                          <img src={cart2}/>
                      </div>
                  </div>

                  <div className="col-lg-4 pt-3">
                      <div className="card">
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
