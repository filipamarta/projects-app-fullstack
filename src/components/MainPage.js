import React from "react";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  {
    feed {
      id
      title
      description
    }
  }
`;


const MainPage = () => {
  
  return (
    <div>
      Main page
      <ProjectForm />
      <h2>Items:</h2>
      <Query query={GET_PROJECTS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          
          const projects = data.feed;
          console.log(data)

          return (
            <div>
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project}/>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default MainPage;
