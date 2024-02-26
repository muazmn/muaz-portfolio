/* eslint-disable react/prop-types */

// import Image from "react-bootstrap/esm/Image";
import { LuArrowRightCircle } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
// doctor, car, portfolio, calculator, weather, colorGame
import { FaUserDoctor, FaCarSide } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosCalculator } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoColorPaletteSharp } from "react-icons/io5";

const iconMapping = {
  1: <FaUserDoctor className="projectIcon text-primary" />,
  2: <FaCarSide className="projectIcon my-text-white" />,
  3: <IoPersonCircleOutline className="projectIcon profileIconColor" />,
  4: <IoIosCalculator className="projectIcon calculatorIconColor" />,
  5: <TiWeatherPartlySunny className="projectIcon weatherIconColor" />,
  6: <IoColorPaletteSharp className="projectIcon text-danger" />,
};
function Project(props) {
  return (
    <>
      <section>
        <article className="p-4  text-center">
          {iconMapping[props.id]}
          <HashLink
            to={`/project/${props.id}#project`}
            className="projectName semiBold my-text-white d-block text-decoration-none fs-4 me-3 mt-3 mb-1"
          >
            <div>
              {props.projectName}
              <span className="projectNameIcon ms-1">
                <FaArrowRightLong />
              </span>
            </div>
          </HashLink>
          {props.projectLink !== "" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.projectLink}
              className="projectDesc my-text-white text-decoration-none"
            >
              <div>
                <span className="text-blue">{props.projectLink}</span>
                <span className="projectNameIcon ms-1">
                  <LuArrowRightCircle />
                </span>
              </div>
            </a>
          ) : null}
        </article>
      </section>
    </>
  );
}

export default Project;
