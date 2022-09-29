import { useRef } from "react";
import classes from "./Input.module.css"; 

const Input = ({placeholder, parent, onChange, email}) => {
  const emailRef = useRef(); 
  return (
    <div onChange={() => onChange(emailRef)}>
    <input type="text" placeholder={placeholder} className={`${classes.input} ${parent === "Hero" ? classes.hero : classes.body} ${email === "false" ? classes.invalid : ""}`} ref={emailRef}/>
    </div>
  )
}

export default Input
