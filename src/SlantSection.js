import React from 'react'
import './SlantSection.css'
import img5 from './images/Tape - S.png'
import img7 from './images/Tape - S.png'
import img6 from './images/Vector (8).png'
import img2a from './images/image 2.png'
import img3a from './images/image 3.png'
import img4a from './images/Vector (10).png'



function SlantSection() {
  return (
    <div className='slant'>
       <div className='slantsection'>

       </div> 
       <div className=''>
            <div className='tapes'>
                    <img className='img6' src={img6} alt=''/>
                    <img className='img7' src={img7} alt=''/>
                    <img className='img5' src={img5} alt=''/>
            </div>
      
            <h1 className='title'>The Dynamics Scrapbook</h1>
            <p className='body'>
                A daily diary of what the makers at <span className='member'>The Dynamics</span> are learning and building everyday, <br></br>
                inspired by Hack Club’s Scrapbook.
            </p>
            <div className='about__join'>
                <button className='about'>About Scrappy</button>
                <button className='join'>Join Scrappy</button>
                <img className='img2a' src={img2a} alt=''/>
            <img className='img3a' src={img3a} alt=''/>
            <img className='img4a' src={img4a} alt=''/>
            </div>
           
        </div>
    </div>
  )
}

export default SlantSection