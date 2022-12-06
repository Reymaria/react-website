import React from "react";
import styles from "./signInPage.module.css";
import LogoPicBlue from "../img/Logo.png";
import SUIPic from "../img/SUIPicture.png";
import { Link } from 'react-router-dom';


const SignInPages = () => {
    return(
        <div className={styles.SUcontainer}> 
            <div className={styles.signInContainer}>
                <div className={styles.sideImage}>
                    <img src={SUIPic} alt="" className={styles.sidePicImage} />
                </div>
                <div className={styles.rightSideElements}>
                    <div className={styles.rightSideNavbar}>
                        <Link to="/" className={styles.sideNavbar}>Home</Link>
                        <Link to="/about" className={styles.sideNavbar}>About</Link>
                        <Link to="/contact" className={styles.sideNavbar}>Contact Us</Link>
                        {/* <button className={styles.buttonNavigationSide}>
                            <a href="/">Home</a>
                        </button> */}
                    </div>
                    <br/>
                    <div className={styles.FormSignIn}>
                        <div className={styles.LogoHeader}>
                            <img src={LogoPicBlue} alt="" className={styles.LogoPicHeader} />
                        </div>
                        <form className={styles.signInFormContainer}>
                            <div className={styles.signInformDetails}>
                                <div className={styles.signInformDetails}>
                                    <div className={styles.signInFormLabels}>Student ID:</div>
                                    <input type="number" className={styles.signInFormInputs} id="studentId" required/>
                                </div>
                                
                                <div className={styles.signformDetails}>
                                    <div className={styles.signInFormLabels}>Password:</div>
                                    <input type="password" className={styles.signInFormInputs} id="pass1" required/>
                                </div>
                                
                                <div className={styles.signformDetails}>
                                    <div className={styles.signInFormLabels}>Retype Password:</div>
                                    <input type="password" className={styles.signInFormInputs} id="Repass1" required/>
                                </div>
                                
                            </div>
                            <div className={styles.signInformDetails}>
                                <button type="submit" className={styles.signInFormSubmit} id="suSubmit" >Sign Me Up! </button>
                            </div>
                            
                            <div className={styles.signInformDetails}>
                                < Link to= "/signup" className={styles.LinkRedirect}>Create Account</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignInPages;