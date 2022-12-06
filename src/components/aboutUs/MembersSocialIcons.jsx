import React from "react";
import styles from './MembersSocialIcons.module.css'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa';
const MembersSocialIcons = () => {
    return (
        <div className={styles.SocialIconsContainer}>
            <FaFacebook size= '25px' />
            <FaInstagram size='25px'/>
            <FaLinkedinIn size='25px'/>
            <FaTwitterSquare size='25px'/>
        </div>
    );
};

export default MembersSocialIcons;