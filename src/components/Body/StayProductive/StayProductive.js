import {useState} from "react";
import Arrow from "./Arrow";
import classes from "./StayProductive.module.css"; 

const StayProductive = () => {
  const [color, setColor] = useState("#3c9f8f")
  let hoverColor = "#6bc7b8"; 
  let baseColor = "#3c9f8f"
  const handleHoverColor = () => {
    setColor(hoverColor);
  }
  const resetHoverColor = () =>{
    setColor(baseColor); 
  }
  return (
    <div className={classes.box}>
      <p className={classes.title}>Stay productive, wherever you are</p>
      <p className={classes.desc}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
      <p className={classes.desc}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
      <p onMouseEnter={handleHoverColor} onMouseLeave={resetHoverColor} className={classes.link}>See how Fylo works <span><Arrow color={color}/></span></p>
    </div>
  )
}

export default StayProductive
