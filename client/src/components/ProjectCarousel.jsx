import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function ProjectCarousel(props) {
  const handleDragStart = (e) => e.preventDefault();
  const images = [...props.image.web, ...props.image.mobile];
  const isDocbook = props.projectName === "Docbook";

  const items = images.map((img, i) => (
    <article key={i} className="carouselImg">
      <div>
        <img
          style={{ objectFit: "contain" }}
          className="d-flex mx-auto bg-dark"
          src={`/images/project/${img}.png`}
          alt="background"
          onDragStart={handleDragStart}
        />
      </div>
      <h1>
        {isDocbook && img.includes("web")
          ? "web version"
          : isDocbook && img.includes("mobile")
          ? "mobile version"
          : ""}
      </h1>
    </article>
  ));
  return (
    <>
      <div className="carousel">
        <AliceCarousel mouseTracking={true} items={items} />
      </div>
    </>
  );
}
// ProjectCarousel.propTypes = {
//   projectName: PropTypes.string.isRequired,
//   image: PropTypes.shape({
//     web: PropTypes.arrayOf(PropTypes.string).isRequired,
//     mobile: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };
// find a way how to access image in react.
// check if projectName equal to docbook,then in it check again, then looping check if web, give 'web version', if mobile, give 'mobile version'.
export default ProjectCarousel;
