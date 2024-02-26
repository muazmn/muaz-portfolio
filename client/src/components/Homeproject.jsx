/* eslint-disable react/prop-types */

import Image from "react-bootstrap/Image";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

function HomeProject(props) {
  return (
    <>
      <div className="homeProjectContainer my-5 d-md-flex">
        <div>
          <p>
            <HashLink
              to={`project/${props.id}#project`}
              className="projectName semiBold my-text-white text-decoration-none fs-5 d-block"
            >
              {props.projectName}
              <span className="projectNameIcon ms-1">
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </HashLink>
            <span>{props.shortDescription}</span>
          </p>
          <div className="stackContainer mb-2">
            {props.techStack.map((tech, index) => (
              <div
                className="me-2 px-3 py-1 rounded-pill"
                style={{
                  background: "rgba(27, 169, 216, 0.1)",
                }}
                key={index}
              >
                <span className="text-blue semiBold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md-container imageContainer">
          <Image
            src={`../../public/images/project/${props.image.web[1]}.png`}
            rounded
            className="projectImage"
          />
        </div>
      </div>
    </>
  );
}
{
  /* <Col className="my-5">
          <p className="bold">PROJECTS</p>
          {projectsData.slice(0, 3).map((props) => (
            <Col key={props.id} className="">
              <HomeProject {...props} />
            </Col>
          ))}
          <Link to="/projects" className="fullProjectContainer bold text-light">
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
          </Link>
        </Col> */
}
export default HomeProject;
