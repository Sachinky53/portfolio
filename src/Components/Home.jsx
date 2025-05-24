import React, { useRef } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Hire from './Hire'
import Faq from './Faq'
import Footer from './Footer'
import WhatIDo from './WhatIDo'
export default function Home() {
  const heroRef=useRef(null);
  const  aboutRef=useRef(null)
  const doRef=useRef(null)
  const skillRef=useRef(null)

  return (
    <div>
      <Header heroReff={heroRef} aboutRef={aboutRef} doRef={doRef} skillRef={skillRef}/>
      <Hero ref={heroRef} />
      <About ref={aboutRef}/>
      <WhatIDo ref={doRef} />
      <Skills ref={skillRef} />
      <Hire />
      <Faq />
      <Footer />
    </div>
  )
}
