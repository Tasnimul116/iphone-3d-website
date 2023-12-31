import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from "../assets/images/iphone-hand.png";

export default function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior:"smooth"
        })
    }
  return (
    <div className='jumbotron-section wrapper'>
          <h2 className="title">New</h2>
          <img src={Iphone} className='logo' alt="Iphone 14 pro" />
          <p className="text">Big and Bigger</p>

          <span className='description'>
          From $41.62/mo. for 24 mo. or $999 brefore trade-in
          </span>


          <ul className="links">
          
              <li>
                  <button className='button'>Buy</button>
              </li>

              <li><a className="link" onClick={handleLearnMore}>Learn more</a></li>
          </ul>

          <img src={HoldingIphone} alt="iphone" className="iphone-img" />
    </div>
  )
}
