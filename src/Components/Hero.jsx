import React, { forwardRef, useEffect, useRef } from "react";
import "./Hero.css";
import Typed from "typed.js";

const Hero= forwardRef ((props,ref)=> {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {


        
        typedInstance.current = new Typed(typedElement.current, {
            strings: ["Web Developer", "Designer", "Freelancer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typedInstance.current.destroy();
        };
    }, []);

    return (
  
        <div className="hero-section" ref={ref} id="background-hero" >

            <div className="portfolio-details">
                <h2 className="detail-text">HI, I'M A FREELANCER</h2>

                {/* Typed.js animated text */}
                <div className="typed-text" ref={typedElement}></div>

                <h3 className="location-text">
                    Based in Integral University, Lucknow, India
                </h3>

                <div className="my-work-btn">
                    <button>View My Works</button>
                    <span className="contact-me">
                        <a href="#" aria-label="Contact me">Contact me</a>
                    </span>
                </div>
            </div>

            <div className="profile-image">
                <img src="sachin-profile02.jpg" alt="Profile of Sachin" />
            </div>
        </div>
    );
})
export default Hero
