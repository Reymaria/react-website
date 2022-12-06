import React from "react";
import styles from "./signUpPage.module.css";
import LogoPicBlue from "../img/Logo.png";
import SUIPic from "../img/SUIPicture.png";
const SignUpPage = () => {
    return(
        <div className={styles.SUcontainer}>
            <div className={styles.signUpContainer}>
                <div className={styles.sideImage}>
                    <img src={SUIPic} alt="" className={styles.sidePicImage} />
                </div>
                <div className={styles.rightSideElements}>
                    <div className={styles.rightSideNavbar}>
                        <a href="/" className={styles.sideNavbar}>Home</a>
                        <a href="/" className={styles.sideNavbar}>About</a>
                        <a href="/" className={styles.sideNavbar}>Contact Us</a>
                        {/* <button className={styles.buttonNavigationSide}>
                            <a href="/">Home</a>
                        </button> */}
                    </div>
                    <br/>
                    <div className={styles.FormSignIn}>
                        <div className={styles.LogoHeader}>
                            <img src={LogoPicBlue} alt="" className={styles.LogoPicHeader} />
                        </div>
                        <form className={styles.signUpFormContainer}>
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>First Name:</div>
                                <input type="text" className={styles.signUpFormInputs} id="firstName" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>Last Name:</div>
                                <input type="text" className={styles.signUpFormInputs} id="lastName" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>Student ID:</div>
                                <input type="number" className={styles.signUpFormInputs} id="studentId" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>Email:</div>
                                <input type="text" className={styles.signUpFormInputs} id="email" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>Password:</div>
                                <input type="password" className={styles.signUpFormInputs} id="pass1" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <div className={styles.signUpFormLabels}>Retype Password:</div>
                                <input type="password" className={styles.signUpFormInputs} id="Repass1" required/>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                <button type="submit" className={styles.signUpFormSubmit} id="suSubmit" >Sign Me Up! </button>
                            </div>
                            
                            <div className={styles.signUpformDetails}>
                                < a className={styles.LinkRedirect}>Already have an account</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage;