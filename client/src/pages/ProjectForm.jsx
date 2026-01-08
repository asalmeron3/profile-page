import { Form, Button} from "react-bootstrap";
import {useState} from "react";
import { createProject } from "../api";

function ProjectForm() {
  const [formData, setFormData]  = useState({
    title: "",
    description: "",
    imgLink: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  async function postFormData(event) {
    event.preventDefault();
    try {
      const result = await createProject(formData);
      console.log("Project created successfully:", result);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  }

  return (
    <Form onSubmit={postFormData}>
      <Form.Group controlId="formProjectTitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter project title" 
        name="title"
        value={formData.title}
        onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formProjectDescription">
        <Form.Label>Project Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Enter project description" 
          name="description"
          value={formData.description}
          onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formProjectImgLink">
        <Form.Label>Project Image Link</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Enter project image link" 
          name="imgLink"
          value={formData.imgLink}
          onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProjectForm;