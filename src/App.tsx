import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

import { TopTitle } from './components/TopTitle'
import { ProjectSection } from './components/ProjectSection'
import { professionalProjects, personalProjects } from './data'
import { ProjectDetails } from './pages/ProjectDetails'

function HomePage() {
  return (
    <>
      <title>Michael Levesque - Senior Software Engineer</title>
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

function NotFoundPage() {
  return (
    <main className="app-not-found">
      <title>Michael Levesque - Page Not Found</title>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
    </main>
  )
}

function App() {
  return (
    <>
      <TopTitle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
