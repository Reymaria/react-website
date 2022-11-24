import styles from "./Hero.module.css";
// import bg from '../img/bg1.svg';
import imgs from '../img/tuplogo.png';
const Hero = () => {
  return (
    <div className={styles.container}>
        
      <h1>Technological University of the Philippines Library System</h1>
      {/* <img src={bg} alt="bg"/> */}
      <div className={styles.image}>
            <img src="/images/tuplogo.png" />
        </div>

    </div>
  );
};

export default Hero;