import React from 'react'
import style from './About.module.css'

export default function About() {
    return <>
        <div className={style.About}>
  <div className="container-fluid bg-home text-center p-4">
    <h1 className="text-white text-center text-uppercase p-4 mt-4">about component</h1>
    <div className="styling d-flex justify-content-center align-items-center">
      <hr className="hr-styling text-white text-center" />
      <i className="fa-solid fa-star me-4 ms-4" style={{ color: "#ffffffff" }}></i>
      <hr className="hr-styling text-white text-center" />
    </div>
    <div className="container">
      <div className="row mb-4 p-4 pb-4">
        <div className="col-md-6 text-white text-start">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 text-white text-start">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  </div>
</div>
       </>
}
