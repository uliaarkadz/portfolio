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
            github="https://github.com/uliaarkadz/sealproject1"
            site="https://sealproject1-sigma.vercel.app/"
          />
          <Projects
            name="My Running App"
            github="https://github.com/uliaarkadz/sealproject2"
            site="https://yb-seal-project-2.onrender.com/user/signup"
          />
        </div>
      </div>
    </div>
  );
};

// export the component
export default Main;
