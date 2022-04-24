import React from 'react'
import img1 from "../../Images/Auli ski jum2 (2).jpg"
import img2 from "../../Images/Auli2.jpg"
import img3 from "../../Images/Skiing Auli.jpg"

const Anil = () => {
  return (
    <div>
       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       <div className="container">
         <div className="row pt-5 pb-5">
         <div className="col-lg-12">
           <h1>Anil</h1>
         </div>
         <div className="row">
           <div className="col-lg-12 pt-3 pb-3">
             <h1>WHAT TO KNOW</h1>
             <p>he small yet picture-perfect town of Auli is India's premier ski resort destination. Originally developed as a paramilitary base, Auli's skiing slopes are popular among tourists and professionals alike. In winter, Auli hosts several snow adventure events. You can also take skiing lessons here (https://gmvnonline.com/skiing).

Standing at around 2,800 m, and surrounded by acres of oak and coniferous forests, Auli offers panoramic views of some of India’s highest peaks, including the second-highest in the country, Nanda Devi (7,816m).  It is also the gateway to the Nanda Devi and the Valley of Flowers National Park, including the Hemkund Sahib gurdwara, and popular trekking destinations such as Gorson Bugyal, Pangerchulla Summit, and Tapovan can be accessed through Auli. Besides Auli, Uttarakhand has several other skiing destinations, like Dayara Bugyal, Munsiyari and Mundali.</p>
           </div>
         </div>
         </div>
       </div>
            
    </div>
  )
}

export default Anil
