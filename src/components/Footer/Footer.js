import FooterNav from "./FooterNav/FooterNav";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import Phone from "./icon-phone.svg"; 
import Email from "./icon-email.svg"; 
import Logo from "./logo.svg"; 
import classes from "./Footer.module.css"; 
const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={Logo} alt="Fylo logo" className={classes.logo}/>
      <div className={classes.footerBar}>
      <div className={classes.infoBox}>
        <div className={classes.info}>
          <img src={Phone} alt=""/>
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div className={classes.info}>
          <img src={Email} alt=""/>
          <p>example@fylo.com</p>
        </div>
      </div>
      <FooterNav/>
      <SocialMediaBar/>
      </div>
    </div>
  )
}

export default Footer
