
import styles from "./Subcribe.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Subcribe = () => {
  return (
    <section className={`section px-0 py-2`}>
      <motion.div
        className={` ${styles.card} sectionContainer`}
        variants={fadeIn("up", "spring", 0.5, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={`${styles.content}`}>
          <h2 className={`${styles.subcribeTitle}`}>
            Ready to Start Your Journey with Northenby Investments ?{" "}
          </h2>
          <p className={`${styles.subcribeText}`}>
            Stay informed with the latest updates, expert tips, and success
            stories from Northenby Investments .
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Subcribe;
