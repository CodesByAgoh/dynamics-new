import React from 'react'
import './NavBar.css'
import img1 from './images/logo.png'
import img2 from './images/Vector (6).png'
import img3 from './images/Vector (7).png'
import img4 from './images/Vector (9).png'
import img1a from './images/logo (1).png'

function NavBar() {

  return (
    <div className='navbar'>
        <div className='left__side'>
            <img className='img1' src={img1a} alt=''/>
            <p className='thedynamics'>The Dynamics</p>
        </div>
        <div className='right__side'>
        {/* <img className='img' src={img2} alt=''/> */}
            <img className='img3' src={img3} alt=''/>
            <button className='home'>Go back home 
            <img className='img4' src={img4} alt=''/>
            </button>
        </div>
    </div>
  )
}

export default NavBar