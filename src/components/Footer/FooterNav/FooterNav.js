import classes from "./FooterNav.module.css"; 

const FooterNav = () => {
  return (
    <nav className={classes.navBox}>
      <ul className={classes.nav}>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
      <ul className={classes.nav}>
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
    </nav>
  )
}

export default FooterNav
