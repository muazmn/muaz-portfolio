import projectData from "../../projects.json";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ProjectCarousel from "../../components/ProjectCarousel";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
function SingleProject() {
  const params = useParams();
  const data = projectData[params.id - 1];
  return (
    <>
      <Container
        id="project"
        className="py-4 projectCarouselContainer d-flex flex-column justify-content-center"
      >
        <h1 className="bold text-center  my-text-ehite mt-5">
          {data.projectName}
        </h1>
        <ProjectCarousel {...data} />
        <div className="mb-5 mt-2 px-sm-5">
          {data.description.map((paragraph, i) => (
            <p key={i} className="projectDescription ">
              {paragraph}
            </p>
          ))}
          <p className="fs-3 mt-5 bolder my-text-white">Project Link:</p>
          <div className="d-flex flex-wrap gap-5">
            {data.projectLink !== "" ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.projectLink}
                className="projectName semiBold my-text-white text-decoration-none fs-5 d-block"
              >
                {data.projectName}
                <span className="projectNameIcon ms-1">
                  <FaArrowRightLong></FaArrowRightLong>
                </span>
              </a>
            ) : null}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.githubLink}
              className="projectName semiBold my-text-white text-decoration-none fs-5 d-block"
            >
              Github Link
              <span className="projectNameIcon ms-1">
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </a>
          </div>
          <p></p>
        </div>
        <div className="squareHr" style={{ marginTop: "10px" }}>
          <span></span>
        </div>
        <div className="msgForm">
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default SingleProject;
