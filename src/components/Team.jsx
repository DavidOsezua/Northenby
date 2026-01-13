import React from "react";
import { member1, member2 } from "../assets";
import styles from "./Team.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Team = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer`}>
        <div className={`content text-center`}>
          <motion.h2
            className={`title text-left md:text-center`}
            variants={fadeIn("up", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Our Company: Meet the team
          </motion.h2>
          <motion.p
            className={`text text-left md:text-center`}
            variants={fadeIn("up", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Our team is composed of industry experts, including Director Peter
            Michael Jarvis (Financial Adviser) and Secretary Maria Davidson, who
            bring deep knowledge in investment recovery, financial regulation,
            and client representation. Together, we work tirelessly to ensure
            each client receives the best possible service.
          </motion.p>
        </div>

        <div className={`${styles.cardContainer}`}>
          <motion.div
            className={`${styles.card}`}
            variants={fadeIn("right", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img src={member2} />

            <p className={`${styles.name}`}>
              Matthew James Webber
            </p>

            <div>
              <p>Director</p>
              <div></div>
            </div>

            <div className={`h-[1px] w-full bg-[#B6B6B6]`}></div>

            <p className={`${styles.description}`}>
              Peter brings a wealth of experience in finance, legal services,
              and corporate governance. As Director of Northenby Investments
              Holdings, he oversees all strategic operations, ensuring that each
              client receives personalized and effective solutions.
            </p>
          </motion.div>
          <motion.div
            className={`${styles.card}`}
            variants={fadeIn("left", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img src={member1} />

            <p className={`${styles.name}`}>Harbinder Badesha</p>

            <div>
              <p>Secretary</p>
              <div></div>
            </div>

            <div className={`h-[1px] w-full bg-[#B6B6B6]`}></div>

            <p className={`${styles.description}`}>
              Maria Davidson plays a crucial role in the smooth functioning of
              Northenby Investments , managing the firm’s administrative and
              legal processes. With extensive expertise in corporate compliance
              and client coordination.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
