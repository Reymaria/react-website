import React from "react";
import styles from "./FooterBottom1.module.css";
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';


const FooterBottom1 = () => {
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
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Sign Up</a>
                </div>
                <div className={styles.ClosingTag}>
                Copyright 2022 BookGeeks - All Rights Reserved -
                </div>
            </div>
        </div>
    )
}

export default FooterBottom1;