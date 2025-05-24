import React, { forwardRef } from 'react'
import "./WhatIDo.css"
const  WhatIDo= forwardRef ((props,ref)=> {
  return (
    <div className="do-section" ref={ref} >
      <div className="do-heading">
        <p className='text-2xl text-center font-bold '>What I Do</p>
      </div>
      <div className="do-subheading">
        <p className='text-4xl text-center font-serif font-bold' >How I can help your next project</p>
      </div>
      <div className="work-container">
        <div className="work">
          <div className="image">
            <img src="webdesign.png" alt="" />
          </div>
          <div className="title-name">
            <p className='text-2xl  font-serif font-bold' >Web Design</p>

          </div>
          <div className="title-discription">
            <p>I am a dedicated web designer with a passion for creating visually striking and functional websites. With expertise in HTML, CSS, JavaScript, and responsive design, I build user-friendly experiences tailored to meet client needs. </p>
          </div>
        </div>

        {/* second card */}

        <div className="work">
          <div className="image">
            <img src="web-development.png" />
          </div>
          <div className="title-name">
            <p className='text-2xl  font-serif font-bold' >Web Development</p>

          </div>
          <div className="title-discription">
            <p>I am a creative web designer with expertise in responsive design, UX/UI, and front-end technologies. My portfolio showcases user-centered websites that blend aesthetics and functionality.  </p>
          </div>
        </div>

        {/* third card */}

        <div className="work">
          <div className="image">
            <img src="mern.png" />
          </div>
          <div className="title-name">
            <p className='text-2xl  font-serif font-bold' >Mern Stack Development</p>

          </div>
          <div className="title-discription">
            <p>I build full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating dynamic user interfaces, efficient APIs, and seamless database integration.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
) 
export default WhatIDo
