import GradientText from "./animations/GradientText";


const Projects = () => (
    <section id="projects" className="container py-5"       style={{ height: "100vh", overflow: "auto" }}>
        <GradientText
      colors={[
        "#8f7db6",
        "#4079ff",
        "#843bf3ff",
        "#8f7db6",
        "#4079ff",
        "#8f7db6",
      ]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class mb-4"
    >
      <h2 className="fw-bold mb-4 ">
        Some of My Projects! <i class="bi bi-emoji-sunglasses"></i>
      </h2>
    </GradientText>
    </section>
    );
export default Projects