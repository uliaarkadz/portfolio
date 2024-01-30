const Projects = (props) => {
  //The Components Returned JSX
  return (
    <div className="projects">
      <h2>Project Name: {props.name}</h2>
      <h2>
        <a href={props.github} target="_blank">
          Project Github
        </a>
      </h2>
      <h2>
        <a href={props.site} target="_blank">
          Project Deployed Site
        </a>
      </h2>
      <img src="" alt="Project view"></img>
    </div>
  );
};

// export the component
export default Projects;
