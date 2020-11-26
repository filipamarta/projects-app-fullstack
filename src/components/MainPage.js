import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      description
    }
  }
`;

const MainPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4 mb-5">Projects App</h1>
        </Col>
      </Row>
      <Row>
        <ProjectForm />
      </Row>
      <Row>
        <Query query={GET_PROJECTS}>
          {({ loading, error, data }) => {
            if (loading) return <Col>Fetching</Col>;
            if (error)
              return (
                <Col className="text-muted">
                  An error occured while loading your projects
                </Col>
              );

            const projects = data.projects;
            console.log(data);

            return (
              <>
                {projects.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </>
            );
          }}
        </Query>
      </Row>
    </Container>
  );
};

export default MainPage;
