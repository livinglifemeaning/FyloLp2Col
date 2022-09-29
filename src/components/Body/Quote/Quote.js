import Quotes from "./icon-quotes.svg"; 
import Profile from "./profile.jpg"; 
import classes from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={classes.quote}>
      <img src={Quotes} alt=""/>
      <p className={classes.message}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
      <div className={classes.profileBox}>
        <img src={Profile} alt="Kyle Burton"/>
        <div className={classes.info}>
          <p className={classes.name}>Kyle Burton</p>
          <p className={classes.position}>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
