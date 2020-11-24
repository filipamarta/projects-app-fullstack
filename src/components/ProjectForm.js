import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { GET_PROJECTS } from './MainPage'

export const CREATE_PROJECT = gql`
  mutation createProject($title: String!, $description: String!) {
    createProject(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const ProjectForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const { addProject } = useContext(ProjectContext);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    name === "title" ? setTitle(value) : setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //addProject(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Col
      xs={12}
      sm={{ span: 8, offset: 2 }}
      md={{ span: 8, offset: 2 }}
      lg={{ span: 6, offset: 3 }}
    >
      <Form onSubmit={handleSubmit} className="mb-5">
        <h4 className="mb-4">Create a project:</h4>
        <Form.Group controlId="titleInput">
          <Form.Control
            type="text"
            rows="1"
            placeholder="Project Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="descriptionInput">
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Mutation
          mutation={CREATE_PROJECT}
          variables={{ title, description }}
          refetchQueries={
            [
              {
                query: gql`
                  {
                    feed {
                      id
                      title
                      description
                    }
                  }
                `
              }
            ]}
        >
          {(createProject) => (
            <Button onClick={createProject} type="submit">
              Add Project
            </Button>
          )}
        </Mutation>
      </Form>
    </Col>
  );
};

export default ProjectForm;
