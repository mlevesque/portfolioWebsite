import './App.css'

import { TopTitle } from './components/TopTitle'
import { ProjectSection } from './components/ProjectSection'
import { professionalProjects, personalProjects } from './data'

function App() {
  return (
    <>
      <TopTitle />
      {professionalProjects.length > 0 && (
        <section className="projects-header" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Professional Projects</h2>
        </section>
      )}
      {professionalProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      {personalProjects.length > 0 && (
        <section className="projects-header" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Personal Projects</h2>
        </section>
      )}
      {personalProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </>
  )
}

export default App
