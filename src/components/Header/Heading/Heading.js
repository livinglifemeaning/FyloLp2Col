import Logo from "../../../logo.svg"; 
import classes from "./Heading.module.css"; 

const Heading = () => {
  return (
    <div className={classes.heading}>
      <img src={Logo} alt="Fylo logo" className={classes.logo}/>
      <nav>
        <ul className={classes.nav}>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </ul>
      </nav>
    </div>
  )
}

export default Heading
