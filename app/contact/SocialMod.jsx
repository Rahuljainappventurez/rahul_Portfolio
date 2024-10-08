import React from "react"
import "./SocialMod.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const SocialMod = () => {
  return (
    <div className="social">
      <h4 className="small-heading">Let Us be Social</h4>
      <div className="social-icons">
        <div className="icon">
        <FontAwesomeIcon className="icondata" icon={faLinkedinIn} />
          <p>Linkedin</p>
        </div>
        <div className="icon">
        <FontAwesomeIcon className="icondata" icon={faGithub} />
          <p>GitHub</p>
        </div>
        <div className="icon">
        <FontAwesomeIcon className="icondata" icon={faInstagram} />
          <p>Instagram</p>
        </div>
        <div className="icon">
        <FontAwesomeIcon className="icondata" icon={faYoutube} />
          <p>Youtube</p>
        </div>
      </div>
    </div>
  )
}

export default SocialMod