import { Card } from 'react-bootstrap';
import './services.css';


export default function ServicesCard({image,title,description}) {
  return (
    <Card className="project-card my-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
