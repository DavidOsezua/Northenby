import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Card>
      {/* <p>Fill a quick response form</p> */}

      <p>
        Please complete the form and allow 1-2 business days for a case manager
        to contact you.
      </p>

      <form className="content">
        <div className="content mt-[2rem]">
          <input placeholder="Your Name" className={`${styles.input}`} />
          <input placeholder="Phone Number" className={`${styles.input}`} />
          <input placeholder="Your Email" className={`${styles.input}`} />
          <input placeholder="Amount Lost (£)" className={`${styles.input}`} />
          <textarea
            placeholder="Summary of what happened"
            className={`${styles.textarea}`}
          />
        </div>

        <div className="flex justify-end">
          <Button text={`Submit`} />
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
