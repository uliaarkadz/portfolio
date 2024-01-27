import Projects from "./Projects";
const Main = (props) => {
  //The Components Returned JSX
  return (
    <div className="main">
      <div className="list">
        <h1>MY PROJECTS</h1>

        <div className="projectslist">
          <Projects
            name="Met Museum"
            github="https//github.com"
            site="https//render.com"
          />
          <Projects
            name="My Running App"
            github="https//github.com"
            site="https//render.com"
          />
        </div>
      </div>
    </div>
  );
};

// export the component
export default Main;
