import Button from "./Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/Logo2.png" width="200" height="" />
      </div>
      <div className={styles.navbarButtons}>
        <Button variant="secondary">Home</Button>
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Contact Us</Button>
        
      </div>
      <Button variant="primary">Sign Up</Button>
    </div>
  );
};

export default Navbar;