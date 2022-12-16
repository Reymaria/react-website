import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';


import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
    return (
      <div className={styles.container}>
        <div className= {styles.navcontainer}>
          <div>
            <img src="/images/Logo2.png"/>
          </div>
            <div className={styles.navbarButtons}>
                <Link to = '/' className={styles.navbarLinks} >Home</Link>
                <Link to ="/about" className={styles.navbarLinks} >About</Link>
                {/* <button className={styles.NButtons}>
                  
                </button> */}
                <Link to ='/contact' className={styles.navbarLinks} >Contact Us</Link>
                <Link to ="/signup" className={styles.navbarLinks} >Sign Up</Link>

                <div className={styles.mobileNavButtons}>
                    <button className= {styles.hamburgerIcon}>
                        <GiHamburgerMenu />
                    </button>
                    {/* <div className={styles.mobileNavMenu}>
                        <nav ref={navRef}>
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Contact Us</a>
                        </nav>
                    </div> */}
                    {/* <a href="/" className={styles.activeLink}>Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact Us</a> */}
                </div>

                {/* <button>Home</button>
                <button>About</button>
                <button>Contact Us</button> */}
            </div>

        </div>
      </div>
    );
  };
  
  export default NavigationBar;