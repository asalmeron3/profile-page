import {Card, Button} from 'react-bootstrap';

function ProjectCard({name, title, description, src}) {
  return (
    <Card className="mb-4">
        <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
