import Button from "../common/Button";
import styles from "./Navbar.module.css";
import { PlusSmallIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbarHeading}>My Workout Tracker</h1>
      <Button
        type="button"
        text="New program"
        theme="primary"
        size="small"
        icon={<PlusSmallIcon className={styles.buttonIcon} />}
        iconPosition="start"
        onClickHandler={() => console.log("clicked")}
      />
    </div>
  );
};

export default Navbar;
