import React from "react";
import styles from './MembersSocialIcons.module.css'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa';
const MembersSocialIcons = () => {
    return (
        <div className={styles.SocialIconsContainer}>
            <FaFacebook size= '20px' />
            <FaInstagram size='20px'/>
            <FaLinkedinIn size='20px'/>
            <FaTwitterSquare size='20px'/>
        </div>
    );
};

export default MembersSocialIcons;