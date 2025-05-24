import React, { useState } from 'react'
import "./Faq.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Faq() {
  const [openModel, setOpenModel] = useState(null)
  const faq = [
    { Question: "Can you develop both frontend and backend applications?", Answer: "Yes! I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js), allowing me to create both frontend and backend solutions efficiently." },
    { Question: "Do you create responsive and mobile-friendly websites?", Answer: "Absolutely! I ensure that all websites I build are fully responsive and optimized for different screen sizes using CSS frameworks like Tailwind CSS and Bootstrap." },
    { Question: "Can you integrate third-party APIs?", Answer: "Yes, I have experience working with REST APIs and integrating third-party services like payment gateways, authentication systems, and more." },
    { Question: "Can you build an admin dashboard for managing users and tasks?", Answer: "Yes, I can develop admin dashboards where admins can manage users, assign tasks, and track progress, using React.js for the UI and Node.js with MongoDB for the backend." },
    { Question: "How do you handle user authentication in your projects?", Answer: "I implement secure authentication using JWT (JSON Web Token) or Firebase Authentication for login and access control." },
    { Question: "Are you available for freelance or project-based work?", Answer: "Yes! I am open to freelance projects and collaborations. Feel free to contact me to discuss your project requirements." }

  ]
  const toggleFaq = (index) => {
    setOpenModel(openModel === index ? null : index)
  }
  return (

    <>
      <div className="faq-container">
        <div className="right-faq">
          <div className="faq-heading">
            <h2>Have any questions?</h2>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <div key={index} className="faq-questions" onClick={() => toggleFaq(index)} >
                {openModel === index ? <FaChevronUp /> : <FaChevronDown />}
                <span className='item-question-span' >{item.Question}</span>
               {openModel === index && <div className="faq-answer">
                  {item.Answer}
                </div>}
              </div>
            ))}
          </div>

        </div>



        <div className="left-faq">
          <div className="img-questions">
            <img className='bulb-image' src="./bulb.png" alt="bulb" />
          </div>
        </div>
      </div>

    </>
  )
}
