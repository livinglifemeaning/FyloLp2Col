import { useState } from "react";
import Input from "../../UI/Input/Input"; 
import Button from "../../UI/Button/Button"; 
import HeroImage from "./hero-image.svg"; 
import classes from "./Hero.module.css"; 

const Hero = () => {
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
    <div className={classes.hero}>
       <div className={classes.imageBox}>
        <img src={HeroImage} alt="Illustration of two people putting files into a folder" />
      </div>
      <div className={classes.textBox}>
      <h1 className={classes.title}>All your files in one secure location, accessible anywhere.</h1>
      <p className={classes.desc}>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
      <div className={classes.inputBox}>
        <Input placeholder="Enter your email..." parent="Hero" onChange={getRefValue} email={emailValid}/>
        <Button parent="Hero" onClick={validateEmail}>Get Started</Button>
      </div>
      {emailValid === "false" && <p className={classes.invalidMsg}>Please check your email</p>}
      </div>
    </div>
  )
}

export default Hero
