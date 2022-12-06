import React from "react";
import styles from "./aboutTeam.module.css";
import Member1 from "../img/Sandagan Photo.png";
import Member2 from "../img/Cortes Photo.png";
import Member3 from "../img/Rosales Photo.png";
import Member4 from "../img/Torres Photo.png";
import Member5 from "../img/Visperas Photo.png";
import Member6 from "../img/Gonzales Photo.png";

const AboutTeam = () => {
    return(
        <div className={styles.ATcontainer}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutHeadline}>
                    Meet our Team
                </div>
                <div className={styles.TeamContainer}>
                    <div className={styles.firstRowTeam}>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member1} alt="Member1 Sandagan" className={styles.ImageIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;