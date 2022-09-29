import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialMediaBar.module.css"; 

const SocialMediaBar = () => {
  return (
    <div className={classes.bar}>
       <FontAwesomeIcon icon={faFacebookF}/>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram}/>
    </div>
  )
}

export default SocialMediaBar
