import React from "react";
import styles from "./Part2.module.css";
import sidePic1 from '../img/sideImage.png'

const Part2 = () => {
    return(
        <div className={styles.container2}>
            <div className={styles.part2Container}>
                <img src={sidePic1} alt="sidePicture" className={styles.part2sidePic} />
                <div className={styles.Part2Right}>
                    <div className={styles.MainLine}>
                        <div className={styles.MainLine1}>
                            <div>Today a </div>
                            <div className={styles.RedColor}>READER</div>
                        </div>
                        <div className={styles.MainLine2}>
                            <div>Tommorow a </div>
                            <div className={styles.BlueColor}>LEADER</div>
                        </div>
                    </div>

                    <div className={styles.part2Subline}>
                    <div>Be a responsible</div>
                        <div className={styles.RedColor}>TUPCIANS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part2;