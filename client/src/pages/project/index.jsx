/* eslint-disable react/prop-types */

import Project from "../../components/Project";
import projectsData from "../../projects.json";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Projects() {
  const variant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  return (
    <>
      <div id="project" className="pb-5" style={{ paddingTop: "60px" }}>
        <p className="mt-5 mb-2 text-center bolder fs-1">
          <motion.span
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className="text-linear"
          >
            My Projects
          </motion.span>
        </p>
        <div className="container gap-5 mt-5 d-flex justify-content-center flex-wrap">
          {projectsData.map((props) => (
            <motion.div
              className="card rounded-4"
              style={{ maxWidth: "310px" }}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              key={props.id}
            >
              <Project {...props} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
