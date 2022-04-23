import React from 'react'
import img1 from "../Components/Banner_Kedarnath.jpeg"
import img2 from "../Components/Banner_badrinath.jpeg"
import img3 from "../Components/Banner_Yamunotri.jpeg"

const chardham = () => {
  return (
    <div>
        
        <>
        
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
          <div className="row text-center">
             <div className="col-lg-12 pt-5 pb-5">
               <h1 className='display-4'>CHAR DHAM</h1>
               <p className='text-muted'>Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas. In Hindi, 'char' means four and 'dham' refers to religious destinations.

The high-altitude shrines remain shut for around six months every year, opening in summers (April or May) and closing with the onset of winter (October or November). It is believed that one should complete the Char Dham Yatra in a clockwise direction. Hence, the pilgrimage starts from Yamunotri, proceeds towards Gangotri, onto Kedarnath, and finally ends at Badrinath. The journey can be completed by road or by air (helicopter services are available). Some devotees even do a Do Dham Yatra or a pilgrimage to two shrines - Kedarnath and Badrinath.

The Yamunotri temple, lodged in a narrow gorge close to the source of River Yamuna (the second-most sacred Indian river after River Ganga) in Uttarkashi district, is dedicated to Goddess Yamuna. The district of Uttarkashi is also home to Gangotri dedicated to Goddess Ganga, the most sacred of all Indian rivers. Located in the Rudraprayag district lies Kedarnath, dedicated to Lord Shiva. Badrinath, home to the sacred Badrinarayan Temple, is dedicated to Lord Vishnu. The Char Dham Yatra is as divine as it is arduous but fulfills the soul!</p>
             </div>
           </div>
          </div>
            


        </>
    </div>
  )
}

export default chardham