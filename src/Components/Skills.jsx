import { forwardRef } from "react";
import "./Skills.css"

const skills = [
  { name: "HTML5", logo: "./mern.png" },
  { name: "CSS3", logo: "./css.png" },
  { name: "JAVASCRIPT", logo: "javascript.png" },
  { name: "REACT", logo: "react.png" },
  { name: "NODE", logo: "node.png" },
  { name: "EXPRESS", logo: "express.png" },
  { name: "MONGODB", logo: "mongo.png" },
  { name: "PYTHON", logo: "python.png" },
  { name: "TAILWIND", logo: "tailwind.png" }
];

const  Skills= forwardRef ((props,ref)=> {
  return (
    <>
      <div className="skill-container" ref={ref}>
        <div className="skill">
          <p className='text-2xl text-center font-bold'>Skills</p>
        </div>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img className="logo" src={skill.logo} alt={skill.name} />
            <h2 className="skill-name">{skill.name}</h2>
          </div>
        ))}
      </div>

      <div className="resume-btn">
        <a href="/Sachin-Yadav-resume.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
    </>
  );
}
)
export default Skills;
