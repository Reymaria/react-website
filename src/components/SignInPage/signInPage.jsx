import React from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from "./signInPage.module.css";
import LogoPicBlue from "../img/Logo.png";
import SUIPic from "../img/SUIPicture.png";
import { Link } from 'react-router-dom';


const Swalert = withReactContent(Swal);


const SignInPages = () => {
    const studentIdRef = React.useRef();
    const pass1Ref = React.useRef();
    const repass1Ref = React.useRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const studentId = studentIdRef.current.value;
        const pass1 = pass1Ref.current.value;
        const repass1 = repass1Ref.current.value;
        
        Swalert.fire({
            title: "Successfully signed in.",
            text: "(zero functionality behind this form)"
        })
    }

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
                        <form className={styles.signInFormContainer} onSubmit={handleSubmit}>
                            <div className={styles.signInformDetails}>
                                <div className={styles.signInformDetails}>
                                    <div className={styles.signInFormLabels}>Student ID:</div>
                                    <input type="number" className={styles.signInFormInputs} id="studentId" ref={studentIdRef} required/>
                                </div>
                                
                                <div className={styles.signformDetails}>
                                    <div className={styles.signInFormLabels}>Password:</div>
                                    <input type="password" className={styles.signInFormInputs} id="pass1" ref={pass1Ref} required/>
                                </div>
                                
                                <div className={styles.signformDetails}>
                                    <div className={styles.signInFormLabels}>Retype Password:</div>
                                    <input type="password" className={styles.signInFormInputs} id="Repass1" ref={repass1Ref} required/>
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