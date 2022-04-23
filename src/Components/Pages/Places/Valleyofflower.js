import React from 'react'
import img1 from "../../Images/Banner.jpg";
import img2 from "../../Images/Banner1.jpg"
import img3 from "../../Images/Banner3.jpg"
import img4 from "../../Images/Valleybanner.jpg"


const Valleyofflower = () => {
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
         <div className="row pt-5 pb-5">
             <div className="col-lg-12">
                 <h1>Valley of Flowers</h1>
             </div>
         </div>  
         <div className="row">
             <div className="col-lg-6 pt-5 pb-5">
                 <img src={img4} id="vallery"/>
             </div>
         </div>
         <div className="row">
             <div className="col-lg-12">
                 <h4>What to know</h4>
                 <p className='text-muted'>With a stunning backdrop of the mighty Himalayan ranges, the Valley of Flowers National Park presents an ethereal view and an unforgettable experience for visitors. Spread over an area of 87 sq km in the Chamoli district, the Valley of Flowers National Park is a UNESCO World Heritage Site and forms one of the two core zones (the other being the Nanda Devi National Park) of the Nanda Devi Biosphere Reserve.

The valley is believed to have been discovered in 1931, when three British mountaineers – led by Frank S Smythe – lost their way and chanced upon this spectacular valley. Attracted by the beauty of this place they named it the “Valley of Flowers”.

As the name suggests, Valley of Flowers is a destination where nature blooms in full glory offering a breathtaking experience. Exotic flowers (over 600 species) like orchids, poppies, primulas, marigold, daisies and anemones are an eye-catching spectacle. Sub-alpine forests birch and rhododendron cover parts of the park's area. The trek to the valley offers eye-catching spectacles like cascading waterfalls and wild streams.  Situated at an altitude of around 3,600 m above the sea level, the valley is also home to such rare and amazing wildlife species like the gray langur, the flying squirrel, the Himalayan weasel, and black bear, the red fox, the lime butterfly, the snow leopard and Himalayan monal, to name a few.</p>
             </div>
         </div>
         </div>
      </>
    </div>
  )
}

export default Valleyofflower
