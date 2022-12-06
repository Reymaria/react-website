import React from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from "./CPage.module.css";
import {HiOutlineMail, HiLocationMarker} from 'react-icons/hi';
import {BsFillTelephoneFill} from 'react-icons/bs';


const Swalert = withReactContent(Swal);


const CPage = () => {
    const fnRef = React.useRef();
    const eaRef = React.useRef();
    const subRef = React.useRef();
    const msgRef = React.useRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const fn = fnRef.current.value;
        const ea = eaRef.current.value;
        const sub = subRef.current.value;
        const msg = msgRef.current.value;
        
        Swalert.fire({
            title: "Sent!",
            html: (<>
                <p>Full name: {fn}</p>
                <p>Email address: {ea}</p>
                <p>Subject: {sub}</p>
                <p>Message: {msg}</p>
            </>)
        })
    }

    return(
        <div className={styles.Ccontainer}>
            <div className={styles.contactContainer}>
                <div className={styles.OpenTag}> Drop us a message and we will get back to you </div>
                <div className={styles.contactBoxContainer}>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="fn" className={styles.formLabels}>Full Name:</label>
                                <input type="text" name="fullName" className={styles.coninput} id="fn" ref={fnRef} required />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="ea" className={styles.formLabels}>Email Address:</label>
                                <input type="email" name="emailAdd" className={styles.coninput} id="ea" ref={eaRef} required/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="sub" className={styles.formLabels}>Subject:</label>
                                <input type="text" name="sub" className={styles.coninput} id="sub" ref={subRef} required/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="msg" className={styles.formLabels}>Message:</label>
                                <textarea className={styles.cinputs} id="msg" ref={msgRef} required></textarea>
                            </div>
                            {/* <input type="submit" value="Submit" />
                            </div> */}
                            <button className= {styles.submitbutton}>Submit</button>
                        </form>
                            
                    </div>
                    <div className={styles.formContactDetails}>
                        <div className={styles.MainDetail}>
                            <h3>Reach Us</h3>
                        </div>
                        <div className={styles.subDetails}>
                            <div className={styles.subdetailContainer}>
                                <div className={styles.detailsIcon}><HiOutlineMail size = "23px"/></div>
                                <div className={styles.detailsText}>tupc_bookgeeks.gmail.com</div>
                            </div>
                            <div className={styles.subdetailContainer}>
                                <div className={styles.detailsIcon}><BsFillTelephoneFill size = "23px"/></div>
                                <div className={styles.detailsText}>+63 (2) 5301.3001</div>
                            </div>
                            <div className={styles.subdetailContainer}>
                                <div className={styles.detailsIcon}><HiLocationMarker size = "23px"/></div>
                                <div className={styles.detailsText}>Carlos Q. Trinidad Avenue
                                    Brgy. Salawag <br/>
                                    Dasmariñas City, Cavite
                                    <br/>4114</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CPage;