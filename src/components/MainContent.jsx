import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import JobContainer from "./JobContainer";

import "/src/styles/components/maincontent.sass";


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <JobContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
