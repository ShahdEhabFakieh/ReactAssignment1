import React from 'react'
import styles from './Footer.module.css';
export default function Footer() {

  /*return <>

  <Footer className='fixed-bottom bg-dark p-2 text-white' >

    <h4>footer</h4>
  </Footer>

  
  
  </>*/
  return <>
    <div id="footer">
      <div className=" container-fluid top_footer bg-main p-4">
        {/*<div className="first p-4 text-white text-center">
          <h2 className='text-uppercase'>Location</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
</div>

  <div className="second p-4 text-white text-center">
          <h2 className='text-uppercase'>Around the web</h2>
          <div className="social_icons">
          <ul className='bg-home'>
          <li className="d-flex">
              <i className='fab mx-2 fa-facebook'></i>
              <i className='fab mx-2 fa-twitter'></i>
              <i className='fab mx-2 fa-instagram'></i>
              <i className='fab mx-2 fa-youtube'></i>
            </li>
            </ul>
            </div>
        </div>

        <div className="third p-4 text-white text-center">
          <h2 className='text-uppercase'>About Freelancer</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          
</div>*/}
      
      <div className="row d-flex justify-content-between text-center text-white p-4 mt-4 mb-4">
        <div className="col-md-4">
          <h3 className='text-uppercase'>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>

        </div>

        <div className="col-md-4">
  <h3 className="text-uppercase">Around the web</h3>
  <div className="social_icons d-flex justify-content-center me-4">
    <ul>
      <li className="d-flex">
        <span className={styles.icons}><i className="fab mx-2 fa-facebook fa-md"></i></span>
        <span className={styles.icons}><i className="fab mx-2 fa-twitter fa-md"></i></span>
        <span className={styles.icons}><i className="fab mx-2 fa-instagram fa-md"></i></span>
        <span className={styles.icons}><i className="fab mx-2 fa-youtube fa-md"></i></span>
      </li>
    </ul>
  </div>
</div>

        <div className="col-md-4">
          <h3 className='text-uppercase mb-2'> About Freelancer</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          

        </div>
      </div>
      
      </div>


    

    <div class="bg-dark p-4 text-white text-center">Copyright © Your Website 2021
    </div>
    </div>
    </>
}
