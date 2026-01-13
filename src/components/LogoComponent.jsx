import React from "react";
import styles from "./LogoComponent.module.css";

const LogoComponent = ({ inverted }) => {
  return (
    <div className={`${inverted ? styles.logoInverted : styles.logo}`}>
      <p className="font-bold"> Northenby Investments </p>
    </div>
  );
};

export default LogoComponent;
