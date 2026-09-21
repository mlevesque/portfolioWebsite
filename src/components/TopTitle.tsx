import './TopTitle.css';

import emailIcon from '../assets/email.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import pdfIcon from '../assets/pdf.svg';
import wordIcon from '../assets/word.svg';

import resumeDOCX from '../assets/mlevesque_resume.docx?url';
import resumePDF from '../assets/mlevesque_resume.pdf';

export function TopTitle() {
  return (
    <header className="top-title">
      <div className="top-title-main">
        <div className="top-title-copy">
          <h1 className="top-title-heading">Michael Levesque</h1>
          <h2 className="top-title-subheading">Senior Software Engineer</h2>
        </div>
        <div className="resume-links" aria-label="Resume downloads">
          <span>RESUME</span>
          <div className="resume-downloads">
            <a href={resumePDF} download="mlevesque_resume.pdf" aria-label="Download resume as PDF">
              <img src={pdfIcon} alt="PDF" /> PDF
            </a>
            <a href={resumeDOCX} download="mlevesque_resume.docx" aria-label="Download resume as Word document">
              <img src={wordIcon} alt="Word" /> DOCX
            </a>
          </div>
        </div>
      </div>
      <nav className="contact-links" aria-label="Contact links">
        <div className="contact-links-primary">
          <a href="mailto:michaelltd@mac.com">
            <img src={emailIcon} alt="Email" />
            <span className="contact-link-full">michaelltd@mac.com</span>
            <span className="contact-link-mobile">Email</span>
          </a>
          <a href="https://github.com/mlevesque" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
            <span className="contact-link-full">github.com/mlevesque</span>
            <span className="contact-link-mobile">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/michael-levesque" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
            <span className="contact-link-full">linkedin.com/in/michael-levesque</span>
            <span className="contact-link-mobile">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>

  );
}
