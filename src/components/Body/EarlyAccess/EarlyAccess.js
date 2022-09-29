import { useState } from "react";
import Input from "../../UI/Input/Input"; 
import Button from "../../UI/Button/Button"; 
import classes from "./EarlyAccess.module.css"; 

const EarlyAccess = () => {
  const [emailValid, setEmailValid] = useState("undefined"); 
  const [input, setInput] = useState(); 
  const getRefValue = (e) => {
    setInput(e.current.value)
  };
  const validateEmail = () =>{
    if(String(input).toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmailValid("true")
    } else{
      setEmailValid("false"); 
    }
  }

  return (
    <div className={classes.box}>
      <div className={classes.textBox}>
      <p className={classes.title}>Get early access today</p>
      <p className={classes.desc}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>
      <div className={`${classes.inputBox} ${emailValid === "false" ? classes.invalid : ""}`}>
        <Input placeholder="email@example.com" onChange={getRefValue} email={emailValid}/>
        {emailValid === "false" && <p className={classes.invalidMsg}>Please check your email</p>}
        <Button onClick={validateEmail}>Get Started For Free</Button>
      </div>
    </div>
  )
}

export default EarlyAccess
