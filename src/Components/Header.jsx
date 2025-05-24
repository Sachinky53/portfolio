import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoCall } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header({ heroReff,aboutRef,doRef,skillRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  // Toggle navigation menu
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header-background ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-bar">
        <div className="left-asider">
          <div className="icon-portfolio">
            <h1>SACHIN</h1>
          </div>
        </div>
        <div className="right-asider">
          <div className="call-icon">
            <IoCall />
          </div>
          <div className="number">(+91) 9663460616</div>
          <div className="menu-icon">
            <HiOutlineMenu onClick={toggleNav} />
            <div className={`fullscreen-nav ${isOpen ? "open" : ""}`}>
              <button className="close-btn" onClick={toggleNav}>
                X
              </button>
              <ul className="nav-links">
                <li onClick={() => scrollSection(heroReff)}>Home</li>
                <li onClick={() => scrollSection(aboutRef)} >About</li>
                <li onClick={()=>scrollSection(doRef)} >What I Do</li>

                <li onClick={()=>scrollSection(skillRef)} >Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
