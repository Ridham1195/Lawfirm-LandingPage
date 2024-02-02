import React from "react";
import styles from "./HeroSection.module.css";
import Nav from "./Nav/Nav";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.herodiv}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.bottomsection}>
          <div className={styles.bottomsectionMain}>
            <div className={styles.bottomsectionHeading}>
              <h1>You don't have to </h1>
              <h2>Fight them Alone.</h2>
            </div>
            <div>
              <p className={styles.bottomsectionPara}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </p>
            </div>
            <div className={styles.bottomsectionInput}>
              <input placeholder="Enter your eamil address"/>
              <button>Let's Talk</button>
            </div>
          </div>
          <div>
            <img
              src={require("../../Assets/boyimage.png")}
              alt="boyimage"
              width={468}
              height={555}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
