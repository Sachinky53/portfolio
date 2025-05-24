import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="left-footer">
                    <h2 className="left-footer-heading">Let's get in touch</h2>
                    <p className="footer-para">I enjoy discussing new projects and design challenges. <br />
                        Please share as much info ,as possible <br />
                        so we can get the most out of our <br />
                        first catch-up.
                    </p>

                    <p className="footer-loaction">
                        <label htmlFor="">Living In:</label>
                        <br />
                        Engineering chauraha,Lucknow Uttar Pradesh India
                    </p>
                    <div className="footer-call">
                        <label htmlFor="">Call</label>
                        <br />
                        (+091) 9663460616
                    </div>
                    <div className="footer-social-media-icon">
                        <div className="icons">
                            <div className="instagram-icons"><FaInstagram />
                            </div>
                            <div className="github-icons"><SiGithub />
                            </div>
                            <div className="linkdin-icons"><FaLinkedin /></div>
                        </div>
                    </div>
                </div>
                <div className="right-footer">
                    <h2 className="right-footer-heading">Estimate your Project?</h2>
                    <form>
                        <div className="form-name">
                            <label htmlFor="">What is Your Name:</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className="form-email-address">
                            <label htmlFor="">Your Email Address:</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className="help-section">
                            <label htmlFor="">How can I Help you?</label>
                            <br />
                            <textarea rows={6} cols={30} ></textarea>
                        </div>
                        <div className="send-btn">
                            <button className='send-btn' >Send <FaArrowRight />
                             </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
