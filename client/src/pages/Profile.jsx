import {Container, Row, Col} from "react-bootstrap";
import Banner from "../components/Banner/Banner";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectForm from "./ProjectForm.jsx";
import selfie from "../assets/selfie.jpg";
import {fetchProjects} from "../api.js";
import {useEffect, useState} from "react";
function Profile() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
    .then(setProjects );
  }, []);

  return (
    <Container>
      <Banner mainText="Arturo Salmeron" subText="Aspiring Jack of All Trades, Master of Learning" imgSrc={selfie} />
        <Row>
          {projects.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        {/* <ProjectForm /> */}
      </Container>
  );
}

export default Profile;
