import { Card } from "react-bootstrap";
import './projects.css'
export default function ProjectsCard({image,title,description}) {
    return (
      <Card className="projects my-3">
        <Card.Img variant="top" src={image} className="project-image mt-5" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  