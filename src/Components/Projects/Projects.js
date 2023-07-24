import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {projects} from '../../Shared/Data/data'
import ProjectsCard from '../../Shared/ProjectCard/ProjectCard';

function ProjectsPage() {
  return (
    <Container className="services-page">
      <Row>
        <Col className='services'>
          <h2>Our Projects</h2>
          <p>Check out some of the projects we've worked on recently.</p>
        </Col>
      </Row>
      <Row>
        {projects.map((service) => (
          <Col md={4} key={service.title}>
            <ProjectsCard title={service.title} description={service.desc} image={service.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsPage;