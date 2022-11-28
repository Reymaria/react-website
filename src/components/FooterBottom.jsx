// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { instagram } from '@fortawesome/free-regular-svg-icons';
// import Button from "./Button"
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
    return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.footerIcons}>
          <a href="#"><img src="images/🦆 icon _Facebook_.svg" /></a>
          <a href="#"><img src="images/🦆 icon _Instagram_.svg" /></a>
          <a href="#"><img src="images/🦆 icon _LinkedIn In_.svg" /></a>
          <a href="#"><img src="images/🦆 icon _Envelope_.svg" /></a>
          <a href="#"><img src="images/🦆 icon _Twitter Square_.svg" /></a>
        </div>
          {/* <FontAwesomeIcon icon={instagram} /> */}
        <div className={styles.footerLinks}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Sign Up</a>
        </div>
        <div className={styles.copyright}>
          Copyright 2022 BookGeeks - All Rights Reserved
        </div>
      </div>
    </div>
    );
  };
  
export default FooterBottom;