import React from "react";
import styles from "./aboutUs.module.css";

const AboutUsPage = () => {
    return (
        <div className={styles.acontainer}>
            <div className={styles.aboutcontainer}>
                <div className={styles.aboutbox}>
                    <div className={styles.whoContainer}>
                        <div className={styles.whoDescription}>
                            We are the students in charge of ensuring
                             that the other university students have everything
                              they need to learn and explore topics of interest.
                               In the library, we provide safe and secure data
                                while performing daily tasks.
                        </div>
                        <div className={styles.whoTitle}>
                        WHO <br/> WE <br/> ARE
                        </div>
                    </div>
                    <div className={styles.whatContainer}>
                        <div className={styles.whatTitle}>
                        WHAT <br /> WE <br /> CAN DO
                        </div>
                        <div className={styles.whatDescription}>
                        BookGeeks is a library system designed to help with the management of library resources.
                        It primarily focuses on the process of borrowing books - when a member borrows a book,
                         the system stores the student information and the borrowed book. Users are also able
                          to register new members or leave messages through the Contact Us page.
                           Once registered, the book return dates and number of copies available can be accessed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;