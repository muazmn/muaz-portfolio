import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/index.css";
import { HashLink } from "react-router-hash-link";

function RootLayout() {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(false);

  const location = useLocation();
  const isHome = location.hash === "#home";
  console.log(location.hash);
  const isAbout = location.hash === "#about";
  const isContact = location.hash === "#contact";
  const isProject = location.hash === "#project";

  return (
    <>
      <div className="navbarLayout px-3 fixed-top shadow-sm">
        <HashLink
          to="/#home"
          className={`navLink ${
            isHome ? "link" : ""
          } logo my-text-white text-decoration-none bolder fs-5`}
        >
          <span>Muaz_Aiman</span>
        </HashLink>
        <div className="linksContainer">
          <HashLink
            className={`navLink ${
              isHome ? "link" : ""
            } my-text-white text-decoration-none`}
            to="/#home"
          >
            <span>Home</span>
          </HashLink>
          <HashLink
            className={`navLink ${
              isAbout ? "link" : ""
            } my-text-white text-decoration-none`}
            to="/#about"
          >
            <span>About</span>
          </HashLink>
          <HashLink
            className={`navLink ${
              isProject ? "link" : ""
            } my-text-white text-decoration-none`}
            to="/projects#project"
          >
            <span>Project</span>
          </HashLink>
          <HashLink
            className={`navLink ${
              isContact ? "link" : ""
            } my-text-white text-decoration-none`}
            to="/#contact"
          >
            <span>Contact</span>
          </HashLink>{" "}
        </div>
        <button
          className={`toggle_btn ${active ? "active" : ""} bg-transparent`}
          onClick={() => {
            setDropdown(!dropdown);
            setActive(!active);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`dropdown_menu ${dropdown ? "open" : ""}`}>
        <HashLink
          className={`navLink ${
            isHome ? "link" : ""
          } my-text-white text-decoration-none bold`}
          to="/#home"
        >
          <span>Home</span>
        </HashLink>
        <HashLink
          className={`navLink ${
            isAbout ? "link" : ""
          } my-text-white text-decoration-none bold`}
          to="/#about"
        >
          <span>About</span>
        </HashLink>
        <HashLink
          className={`navLink ${
            isProject ? "link" : ""
          } my-text-white text-decoration-none bold`}
          to="/projects#project"
        >
          <span>project</span>
        </HashLink>{" "}
        <HashLink
          className={`navLink ${
            isContact ? "link" : ""
          } my-text-white text-decoration-none bold`}
          to="/#contact"
        >
          <span>contact</span>
        </HashLink>
      </div>
      <Outlet />
    </>
  );
}
export default RootLayout;
