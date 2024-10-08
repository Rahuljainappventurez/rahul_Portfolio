import React from "react"
import "./MySkills.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faJs, faHtml5, faCss3, faReact, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons'
// src/components/MySkills.js
// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './MySkills.scss'

const MySkills = () => {
  return (
    <div className="skill-section section-padding">
      <div>
        <h3 className="main-heading">My Skills</h3>
        <div className="skills-item">
          <div className="ball-item">
          <FontAwesomeIcon icon={faGithub} />
            <p className="skill-heading">GitHub</p>
          </div>
          <div className="ball-item">
          <FontAwesomeIcon icon={faJs} className="js-icon" />
            {/* <FontAwesomeIcon icon={['fab', 'js']} /> */}
            <p className="skill-heading">JavaScript</p>
          </div>
          <div className="ball-item">
            <FontAwesomeIcon icon={faHtml5} className="html-icon" />
            <p className="skill-heading">HTML</p>
          </div>
          <div className="ball-item">
            <FontAwesomeIcon icon={faCss3} className="css-icon" />
            <p className="skill-heading">CSS</p>
          </div>
          <div className="ball-item">
            <FontAwesomeIcon icon={faReact} className="react-icon" />
            <p className="skill-heading">ReactJS</p>
          </div>
          <div className="ball-item">
            <FontAwesomeIcon icon={faBootstrap} className="bootstrap-icon" />
            <p className="skill-heading">Bootstrap</p>
          </div>
          <div className="ball-item">
            <FontAwesomeIcon icon={faSass} className="sass-icon" />
            <p className="skill-heading">Sass/SCSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills


// const MySkills = () => {
//   return (
//     <div className="skill-section section-padding">
//       <div>
//         <h3 className="main-heading">My Skills</h3>
//         <div className="skills-item">
//           <div className="ball-item">
//             <i className="fa-brands fa-github"></i>
//             <p className="skill-heading">Github</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands js-icon fa-js"></i>
//             <p className="skill-heading">JavaScript</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands html-icon fa-html5"></i>
//             <p className="skill-heading">HTML</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands css-icon fa-css3"></i>
//             <p className="skill-heading">CSS</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands react-icon fa-react"></i>
//             <p className="skill-heading">ReactJS</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands bootstrap-icon fa-bootstrap"></i>
//             <p className="skill-heading">Bootstrap</p>
//           </div>
//           <div className="ball-item">
//             <i className="fa-brands sass-icon fa-sass"></i>
//             <p className="skill-heading">Sass/Scss</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MySkills