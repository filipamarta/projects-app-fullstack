import React, { useState } from "react";
import { Card, Col, Button, Form } from "react-bootstrap";
/* import { ProjectContext } from "../context/ProjectContext"; */
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $description: String!
  ) {
    updateProject(
      projectId: $projectId
      title: $title
      description: $description
    ) {
      id
      title
      description
    }
  }
`;

const ProjectItem = ({ project }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isEditError, setIsEditError] = useState(false);
  const [editTitle, setEditTitle] = useState(project.title);
  const [editDescription, setEditDescription] = useState(project.description);
  /*  const { deleteProject, editProject, projectDetails } = useContext(
    ProjectContext
  );
 */
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    name === "editTitle" ? setEditTitle(value) : setEditDescription(value);
  };

  /*   const handleSubmit = (event, updateProject) => {
    event.preventDefault();
    if (
      project.title !== editTitle ||
      project.description !== editDescription
    ) {
      editProject(project.id, editTitle, editDescription);
      setIsEditClicked(false);
    } else {
      console.log("No changes made");
      setIsEditError(true);
      setIsEditClicked(false);
    }
  }; */

  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      {isEditClicked ? (
        <Card className="form-selected">
          <Card.Body>
            <Mutation mutation={UPDATE_PROJECT}>
              {(updateProject, { loading, error, data }) => (
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (
                      project.title !== editTitle ||
                      project.description !== editDescription
                    ) {
                      updateProject({
                        variables: {
                          projectId: project.id,
                          title: editTitle,
                          description: editDescription,
                        },
                      });
                      setIsEditClicked(false);
                    } else {
                      console.log("No changes made");
                      setIsEditError(true);
                      setIsEditClicked(false);
                    }
                  }}
                  className="mb-1"
                >
                  <Form.Group controlId="editTitleInput">
                    <Form.Control
                      type="text"
                      rows="1"
                      placeholder=""
                      name="editTitle"
                      value={editTitle}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="editDescriptionInput">
                    <Form.Control
                      as="textarea"
                      rows="5"
                      placeholder=""
                      name="editDescription"
                      value={editDescription}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="cancel-btn mr-4"
                    type="button"
                    name="cancel"
                    onClick={() => {
                      setIsEditClicked(false);
                    }}
                  >
                    Cancel
                  </Button>

                  <Button type="submit">Update</Button>
                </Form>
              )}
            </Mutation>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button
              variant="primary"
              className="delete-btn mr-4"
              type="button"
              name="delete"
              onClick={() => {
                //deleteProject(project.id);
              }}
            >
              delete
            </Button>
            <Button
              variant="primary"
              className="edit-btn"
              type="button"
              name="edit"
              onClick={() => {
                setIsEditClicked(true);
              }}
            >
              edit
            </Button>
            <br />
            <Button
              variant="primary"
              className="mt-4"
              type="button"
              name="projectDetails"
              onClick={() => {
                //projectDetails(project.id)
              }}
            >
              go to project
            </Button>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
};

export default ProjectItem;
