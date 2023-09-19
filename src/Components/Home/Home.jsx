import React from 'react'

export default function Home() {
  return <>
    <div id="Home">
  <div className="container-fluid bg-home text-center p-4">

    <img className='mt-4 mb-4 p-4 w-30 Home-img' src={require("../Images/avataaars.png")}/>
    <div className="styling d-flex justify-content-center align-items-center mb-2">
      <hr className='hr-styling text-white text-center' />
      <i class="fa-solid fa-star me-4 ms-4" style={{color: "#ffffffff"}}></i>
      <hr className='hr-styling text-white text-center'/>
    </div>
    <p className='text-white p-2'>Graphic Artist - Web Designer - Illustrator</p>
  

  </div>
 </div>
  </>
}
