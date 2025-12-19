import {Card, Button} from 'react-bootstrap';

function ProjectCard({name, description, img_src, project_link}) {
  return (
    <Card className="mb-4">
        <Card.Img variant="top" src={img_src}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button href={project_link} target="_blank" variant="primary">View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
