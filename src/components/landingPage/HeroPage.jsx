import React from "react";
import styles from "./Hero2.module.css";
import TUPLogo from '../img/tuplogo.png';
import waveSVG from '../img/wave.svg';
import { Link } from "react-router-dom";

const HeroPage = () => {
    return (
      <div className={styles.container1}>
        <div className={styles.heroContainer}>
            <div className={styles.heroContainerUp}>
                <div className={styles.heroContainerLeft}>
                    <h1>Technological University of the Philippines Library System</h1>
                    <button className={styles.button1} >
                        <Link to = "/signup">Get Started</Link>  
                        </button>
                </div>
                <div className={styles.heroContainerRight}>
                    <img src= {TUPLogo} className={styles.tupLogoPic} alt="tuplogo" />
                </div>
            </div>
        </div>
        {/* <div className={styles.flavor}>
        <h1>Technological University of the Philippines Library System</h1>
        <Button variant="primary">Get Started</Button>
        </div>
        <div className={styles.image}>
        <img src={imgs}/>
        </div>
        <img src={waveSVG} alt="bg"/> */}
        <div className={styles.heroContainerDown}>
            <img src={waveSVG} className={styles.heroWave} alt="wavedesign" />
        </div>
    </div>
    );
  };
  
  export default HeroPage;
