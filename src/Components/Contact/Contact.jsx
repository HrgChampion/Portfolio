import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/himanshu-gauba-504a7018a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
            <div>himanshu-gauba-504a7018a</div>
          </a>
          <a
            href="https://github.com/HrgChampion"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github"  />
            <div>HrgChampion</div>
          </a>
          <a
            href="mailto:hgauba4@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
            <div>hgauba4@gmail.com</div>
          </a>
          <a
            href="https://www.instagram.com/himanshu.gauba/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
            <div>himanshu.gauba</div>
          </a>
          <a href="tel:+919953275022" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            <div>+91 9953275022</div>
          </a>
        </div>
      </div>
    </>
  );
};