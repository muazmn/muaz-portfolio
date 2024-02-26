import { FaLinkedin, FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footerRoot py-5 align-items-center mt-5">
        <div className="footerContainer mx-auto">
          <div>
            <a
              href="/"
              className="text-blue text-decoration-none d-inline-block mb-4"
            >
              Home
            </a>
          </div>
          <div className="section1">
            <p className="bolder m-0">Contact Me</p>
            <a
              href="mailto:muazmn001@gmail.com"
              className="text-decoration-none text-blue"
            >
              muazmn001@gmail.com
            </a>
            <a
              className="text-blue text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href="../../public/Muaz-Aiman.pdf"
              download="Muaz-Aiman.pdf"
            >
              My resume
            </a>
          </div>
          <div className="footerBorder mt-5"></div>
          <div className="mt-4 justify-content-end d-flex fs-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/muaz-aiman-78a2b8241/"
            >
              <FaLinkedin className="text-blue me-2" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/muaz-aiman-78a2b8241/"
            >
              <FaSquareWhatsapp className="text-blue me-2" />
            </a>
            <a href="https://github.com/muazmn/" className="text-blue">
              <FaSquareGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
