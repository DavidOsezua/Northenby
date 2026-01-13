import React from "react";
import styles from "./Footer.module.css";
import LogoComponent from "./LogoComponent";
import "../App.css";
import Facebook from "./SvgComponents/Facebook";
import { Instagram, Linkdin, Mail } from "./SvgComponents";
import { footerLogo, logo } from "../assets";

const Footer = () => {
  return (
    <footer className={`section ${styles.footerSection}`}>
      <div className={`sectionContainer ${styles.footerContainer}`}>
        <div className={`${styles.firstCol}`}>
          <div className={styles.navLogo}>
            <img src={logo} className="w-[120px] md:w-[180px]" />
          </div>

          <p className="text-[0.8rem] leading-5">
            Northenby Investments is a trading name of Northenby Investments
            Limited, registered in 1st Floor, Boundary House, 91-93 Charterhouse
            Street, London, London, United Kingdom, EC1M 6HR Incorporated on: 23
            February 2017, entity number 10636787
          </p>

          <p className="text-[0.6rem] leading-4">
            Northenby Investments provides free consultations. Fund recovery
            services, including chargeback programs, are subject to retainers,
            fees, and/or commissions based on the individual case history and
            the selected service. Northenby Investments does not offer any
            financial investments or advisory services.
          </p>

          <p className="text-[0.6rem] leading-4">
            * May not initially apply to cryptocurrency cases.
          </p>
        </div>

        <div className={`${styles.secondCol}`}>
          <p className="pb-[1.5rem]">Contact</p>

          <div className={`${styles.secondContent}`}>
            <div>
              <p className="text-[1rem] font-bold">Registered Office:</p>
              <p className="text-[0.8rem]">
                1st Floor, Boundary House, 91-93 Charterhouse Street, London,
                London, United Kingdom, EC1M 6HR
              </p>
            </div>

            <div>
              <p className="text-[1rem] font-bold">Email:</p>
              <p className="text-[0.9rem]">management@northenby.com</p>
            </div>

            <div>
              <p className="text-[1rem] font-bold">Call Us:</p>
              <p className="text-[0.9rem]">0203 576 6918 </p>
            </div>
          </div>
        </div>

        <div>
          <p className="pb-[1.5rem] font-bold">Our Services</p>
          <div className={`${styles.thirdCol} `}>
            <ul className="text-[0.9rem]">
              <li>Trading Scams</li>
              <li>Unregulated Collective Investment Scheme Settlements</li>
              <li>Cryptocurrency Trading Losses</li>
              <li>Regulated Broker Recovery</li>
              <li>Revolut and Chase Bank Refunds</li>
              <li>NFT Scams & Investment Tracing</li>
              <li>Forex Trading Scams</li>
            </ul>
            {/* <ul className="text-[0.9rem]">
              <li>Tracing Services</li>
              <li>Cryptocurrency Trading Losses</li>
              <li>Regulated broker recovery</li>
              <li>Landlord Services</li>
              <li>Residential rent arrears</li>
              <li>Evictions</li>
              <li>Bank Fraud</li>
            </ul> */}
          </div>
        </div>
        <div className={`${styles.forthCol}`}>
          <p className="pb-[1.5rem] font-bold">Information</p>
          <ul className="text-[0.9rem]">
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Terms & Conditions</li>
            <li>Client care policy</li>
            <li>Complaints procedure</li>
            <li>Decision Data</li>
            <li>Entities Register</li>
          </ul>
        </div>
      </div>
      <hr className="w-full" />
      <p className="text-[0.7rem] text-center pt-[1rem]">
        Northenby Investments
        <span className="text-[#ABABAB]"> © 2026. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
