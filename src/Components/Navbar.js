import React from 'react'

function Navbar() {
  return (
    <div>
        <div className=''>
            <div>
               <a href='#logo'><img src='fieldlogo.svg' alt='Logo of FreshField farms'/></a>
                <h4>FreshField</h4>
            </div>
            <div className=''>
                <a href='#about'> About Us</a>
                <a href='#our-story'>Our Story</a>
                <a href='#our-harvest'>Our Harvest</a>
                <a href='#benefits'> Benefits</a>
                <a href='#reviews'> Reviews</a>
                <a href='#contact-us'>Contact Us</a>
            </div>
            <div>
                <a href='https://webflow.com/templates/html/freshfield-agriculture-website-template'> Buy Template</a>
            </div>
        </div>
        
      
    </div>
  )
}

export default Navbar
