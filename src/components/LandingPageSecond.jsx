import styles from "./LandingPageSecond.module.css";

const LandingPageSecond = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/images/image 6.png" />
      </div>
      <div className={styles.flavorText}>
        <h2>
            <span>TODAY A READER</span><br/>
            <span>TOMORROW A LEADER</span>
        </h2>
        <p>Be a responsible <b>TUPCian</b></p>
      </div>
    </div>
  )
}

export default LandingPageSecond;