import React from "react";
import { home } from "../assets";
import styles from "./HomeHero.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

const HomeHero = () => {
  return (
    <section className={`section ${styles.heroSection} `}>
      <div className={`sectionContainer`}>
        {/* OUR SERVICES HERO */}
        <div className={`${styles.servicesHero}`}>
          {/* IMAGE */}

          <motion.div
            className={`content`}
            variants={fadeIn("right", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className={`bigText`}>
              Restoring Balance, <br />
              One Financial Step <br /> at a Time.
            </h2>

            <p className={`mdText ${styles.mdText}`}>
              A Better Financial Future Begins Here.
            </p>

            <NavLink to={`/contact`}>
              <motion.button
                className={`${styles.btn} mt-5`}
                variants={fadeIn("up", "spring", 0.2, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                Let&apos;s Get Started
              </motion.button>
            </NavLink>
          </motion.div>

          <motion.div
            className={`${styles.imageContainer} mb-4`}
            variants={fadeIn("left", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <ReactPlayer
              src="/northenby.mp4"
              playing={true}
              loop={true}
              controls
              muted
              width="100%"
              height="100%"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
