import styles from "./Hero.module.css";
// import bg from '../img/bg1.svg';
import imgs from '../img/tuplogo.png';
import Button from "./Button";

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flavor}>
          <h1>Technological University of the Philippines Library System</h1>
          <Button variant="primary">Get Started</Button>
        </div>
      {/* <img src={bg} alt="bg"/> */}
      <div className={styles.image}>
        <img src="/images/tuplogo.png" />
      </div>

    </div>
  );
};

export default Hero;