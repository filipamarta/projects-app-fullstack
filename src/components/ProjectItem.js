import React, { useState } from "react";
import { Card, Col, Button, Form } from "react-bootstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router";

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $title: String!
    $description: String!
  ) {
    updateProject(
      where: { id: $projectId }
      data: { title: $title, description: $description }
    ) {
      id
      title
      description
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(where: { id: $projectId }) {
      id
    }
  }
`;

const ProjectItem = (props) => {
  const project = props.project;
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
            <Mutation
              mutation={DELETE_PROJECT}
              variables={{
                projectId: project.id,
              }}
              refetchQueries={[
                {
                  query: gql`
                    {
                      projects {
                        id
                        title
                        description
                      }
                    }
                  `,
                },
              ]}
            >
              {(deleteProject, { loading, error, data }) => {
                console.log(data);
                return (
                  <Button
                    variant="primary"
                    className="delete-btn mr-4"
                    type="button"
                    name="delete"
                    onClick={() => deleteProject(project.id)}
                  >
                    delete
                  </Button>
                );
              }}
            </Mutation>
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
                return props.history.push({
                  pathname: `/project/${project.id}`,
                  state: { project: project },
                });
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

export default withRouter(ProjectItem);
