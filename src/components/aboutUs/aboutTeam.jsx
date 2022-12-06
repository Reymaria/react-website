import React from "react";
import styles from "./aboutTeam.module.css";
import Member1 from "../img/Sandagan Photo.png";
import Member2 from "../img/Cortes Photo.png";
import Member3 from "../img/Rosales Photo.png";
import Member4 from "../img/Torres Photo.png";
import Member5 from "../img/Visperas Photo.png";
import Member6 from "../img/Gonzales Photo 1.png";
import MembersSocialIcons from "./MembersSocialIcons";

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
                            <div className={styles.MembersName}>Rheigne</div>
                            <MembersSocialIcons/> 
                        </div>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member2} alt="Member2 Cortes" className={styles.ImageIcon} />
                            </div>
                            <div className={styles.MembersName}>Ella</div>
                            <MembersSocialIcons/> 
                        </div>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member3} alt="Member3 Rosales" className={styles.ImageIcon} />
                            </div>
                            <div className={styles.MembersName}>Brechy</div>
                            <MembersSocialIcons/> 
                        </div>
                    </div>
                    <div className={styles.secondRowTeam}>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member4} alt="Member4 Torres" className={styles.ImageIcon} />
                            </div>
                            <div className={styles.MembersName}>Hannah</div>
                            <MembersSocialIcons/> 
                        </div>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member5} alt="Member5 Visperas" className={styles.ImageIcon} />
                            </div>
                            <div className={styles.MembersName}>Florence</div>
                            <MembersSocialIcons/> 
                        </div>
                        <div className={styles.MembersInfoContainer}>
                            <div className={styles.MembersPhoto}>
                                <img src={Member6} alt="Member6 Gonzales" className={styles.ImageIcon} />
                            </div>
                            <div className={styles.MembersName}>Ivan</div>
                            <MembersSocialIcons/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;