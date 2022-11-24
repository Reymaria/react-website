import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
    return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div> I am footer</div>
      </div>
    </div>
    );
  };
  
export default FooterBottom;