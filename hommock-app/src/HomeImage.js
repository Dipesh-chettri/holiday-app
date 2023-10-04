import React from 'react'
import './component/image.css'
function HomeImage() {
    const image=[{
        id:1,img:"https://hammock-prod.s3-ap-south-1.amazonaws.com/experiences/admin/148c991f18f445ba858359265a9c5622.blob",
        text:"Bore Safari Experience: Tigers Of The Bore Wilds"
    },
    {id:2,img:"https://hammock-prod.s3-ap-south-1.amazonaws.com/experiences/admin/2dd9bb0730f54a64833889dde2372f2f.blob",
     text:"Coorg Wilderness Resort-Luxurious By Nature"},
    {id:3,img:"https://hammock-prod.s3-ap-south-1.amazonaws.com/experiences/admin/fd3966cd691a44bda7820b807f4f158e.blob",
    text:"Experience Kuchesar-Let The Abode Of Jat Rulers Be Your Home"},
   
  ]
  return (
     <div className='image-container'>
        {/* <div style={{display:"flex"}} id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"> */}
   {
    image&&image.map((item)=>{
        return(
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={item.img} className="imglast" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    
  </div>
 
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        )
    })
   }
      
</div>
// </div>
  )
}

export default HomeImage;