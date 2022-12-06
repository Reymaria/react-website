import React from "react";
import styles from "./FooterBottom2.module.css";
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import ContactPage from "../../contactPage.js";
import { Link } from "react-router-dom";

const LightFooterBottom = () => {
    return(
        <div className={styles.fcontainer}>
            <div className={styles.FooterContainer}>
                <div className={styles.SocialIcons}>
                    <FaFacebook size="30px"/>
                    <FaInstagram size="30px"/>
                    <FaLinkedinIn size="30px"/>
                    <HiOutlineMail size="30px"/>
                    <FaTwitterSquare size="30px"/>
                    {/* I dont know how to put address in this icon!! */}
                    {/* <button className= {styles.hamburgerIcon}>
                        <FaFacebook/>
                    </button> */}
                </div>
                <div className={styles.RedirectLinks}>
                    <Link to ="/" className={styles.footerbottom2Link}>Home</Link>
                    <Link to="/about" className={styles.footerbottom2Link}>About</Link>
                    <Link to="/contact" className={styles.footerbottom2Link}>Contact Us</Link>
                    <Link to="/signup" className={styles.footerbottom2Link}>Sign Up</Link>
                </div>
                <div className={styles.ClosingTag}>
                Copyright 2022 BookGeeks - All Rights Reserved -
                </div>
            </div>
        </div>
    )
}

export default LightFooterBottom;