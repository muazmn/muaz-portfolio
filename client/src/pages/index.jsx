// import { useState } from 'react';
/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import { HashLink } from "react-router-hash-link";
import Col from "react-bootstrap/Col";
import {
  FaSquareWhatsapp,
  FaArrowRightLong,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";
import HomeProject from "../components/Homeproject";
import ContactForm from "../components/ContactForm";
import projectsData from "../projects.json";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import { IoIosPaper } from "react-icons/io";
import { motion } from "framer-motion";

function Home() {
  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <>
      <Container
        id="home"
        fluid
        className="py-5 px-sm-5 px-4 d-md-flex flex-column align-items-center"
        style={{ maxWidth: "920px" }}
      >
        <motion.div variants={variant} initial="hidden" whileInView="visible">
          <div className="pt-5">
            <div className="profileImageContainer d-md-flex  justify-content-between">
              <img
                src="/images/profilePicture.jpg"
                className="profileImage mx-auto mx-md-0 d-flex"
                alt="..."
              />
              <h1 className="bolder mt-4 mb-3 mb-md-0 fs-2">
                <span className="">{`Hello, It's Me`}</span>
                <span
                  className="bolder-2 my-text-white d-block my-1"
                  style={{ fontSize: "2.3rem" }}
                >
                  Muaz Aiman
                </span>
                And {`I'm`} a{" "}
                <span className="d-block typeWriter mt-1 d-sm-inline-block mt-sm-0 ms-sm-2">
                  <Typewriter
                    options={{
                      strings: [
                        `<span class="text-linear">Web Developer</span><span>&#8203</span>`,
                        `<span class="text-linear">Fullstack Developer</span><span>&#8203</span>`,
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>
            <p className="mt-5">
              I build perfect{" "}
              <span className="bold my-text-white">website</span> based on your
              requirement, if you need an{" "}
              <span className="bold my-text-white">ecommerce website</span>,{" "}
              <span className="bold my-text-white">profile website</span>, or{" "}
              <span className="bold my-text-white">company website</span>, feel
              free to contact me
            </p>
          </div>
          <div className="d-flex fs-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/5z1l45"
              className="my-text-white me-2 socialMediaIcon"
            >
              <FaSquareWhatsapp />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/muaz-aiman-78a2b8241/"
              className="my-text-white me-2 socialMediaIcon"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/muazmn/"
              className="my-text-white socialMediaIcon"
            >
              <FaSquareGithub />
            </a>
          </div>
          <HashLink
            target="_blank"
            rel="noopener noreferrer"
            to="Muaz-Aiman.pdf"
            download="Muaz-Aiman.pdf"
            className="resumeLink my-text-white
              bold text-decoration-none fs-3"
          >
            View Full <span className="text-linear fs-2">Resume</span>{" "}
            <span className="projectNameIcon ms-1">
              <IoIosPaper />
            </span>
          </HashLink>
        </motion.div>
        <div id="about" className="squareHr">
          <span></span>
        </div>
        <motion.div variants={variant} initial="hidden" whileInView="visible">
          <p className="bold my-text-white">ABOUT</p>
          <p>
            My name is Ahmad Muaz Aiman, a passionate full-stack software
            developer. My journey in programming has equipped me with a strong
            foundation in HTML, CSS, JavaScript, Laravel, ReactJS, and other
            frameworks. My enthusiasm for coding led me to join an 8-month
            online programming course with Legoom Academy, further solidifying
            my skills and understanding of the field.I am always open to new
            opportunities and learning experiences. If you have any projects,
            ideas, or just want to chat, feel free to contact me.
          </p>
        </motion.div>
        <div className="squareHr">
          <span></span>
        </div>
        <Col>
          <p className="bold my-text-white">PROJECTS</p>
          {projectsData.slice(0, 3).map((props) => (
            <motion.div
              key={props.id}
              className=""
              variants={variant}
              initial="hidden"
              whileInView="visible"
            >
              <HomeProject {...props} />
            </motion.div>
          ))}
          <HashLink
            to="/projects#project"
            className="fullProjectContainer bold my-text-white"
          >
            <div className="fullProjectLink py-2 px-3 rounded">
              <div style={{ display: "inline-block" }}>
                <p className="d-inline">
                  <span>View Full Project Here</span>
                  <span className="projectNameIcon ms-2">
                    <FaArrowRightLong />
                  </span>
                </p>
              </div>
            </div>
          </HashLink>
        </Col>
        <div id="contact" className="squareHr">
          <span></span>
        </div>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
