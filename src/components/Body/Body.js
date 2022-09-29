import useMediaQuery from "./useMediaQuery";
import Quote from "./Quote/Quote";
import StayProductive from "./StayProductive/StayProductive";
import EarlyAccess from "./EarlyAccess/EarlyAccess";
import Illustration from "./illustration.svg"; 
import BGDesktop from "./bg-curve-desktop.svg"; 
import BGMobile from "./bg-curve-mobile.svg"; 
import classes from "./Body.module.css";


const Body = () => {
  const isDesktop = useMediaQuery("(min-width: 750px)");
  return (
    <div className={classes.body}>
      <div className={classes.section}>
      <div className={classes.imageBox}>
          <img
            src={Illustration}
            alt="Illustration of three people holding up chat boxes"
          />
        </div>
        <div className={classes.textBox}>
          <StayProductive />
          <Quote />
        </div>
        <img
          src={isDesktop ? BGDesktop : BGMobile}
          alt=""
          className={classes.bg}
        />
      </div>
      <EarlyAccess />
    </div>
  );
};

export default Body;
