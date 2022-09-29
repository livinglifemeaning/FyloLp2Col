import classes from "./Button.module.css"; 

const Button = (props) => {
  return (
    <div className={`${classes.btn} ${props.parent === "Hero" ? classes.hero : classes.body}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
