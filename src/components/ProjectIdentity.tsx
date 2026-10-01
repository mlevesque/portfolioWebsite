import { Link } from 'react-router';
import { ProjectID, type Project } from '../models/ProjectModel';

import teamsLogo from '../assets/teams.svg';
import wheelOfFortuneLogo from '../assets/wheel-of-fortune-slots.png';
import videoBingoLogo from '../assets/video-bingo.png';
import chefvilleLogo from '../assets/chefville.png';
import cafeWorldLogo from '../assets/cafe-world.png';

import './ProjectIdentity.css';

const projectLogos: Partial<Record<ProjectID, { src: string; size?: { width: number; height: number } }>> = {
  [ProjectID.MicrosoftTeams]: { src: teamsLogo },
  [ProjectID.GSNWheelOfFortune]: { src: wheelOfFortuneLogo, size: { width: 103, height: 64 } },
  [ProjectID.GSNVideoBingo]: { src: videoBingoLogo, size: { width: 103, height: 64 } },
  [ProjectID.ZyngaChefville]: { src: chefvilleLogo, size: { width: 103, height: 64 } },
  [ProjectID.ZyngaCafeWorld]: { src: cafeWorldLogo, size: { width: 103, height: 64 } },
};

type ProjectIdentityProps = {
  project: Project;
  linkTo?: string;
};

export function ProjectIdentity({ project, linkTo }: ProjectIdentityProps) {
  const logo = projectLogos[project.id as ProjectID];
  const title = <h2 className="project-title">{project.title}</h2>;

  return (
    <div className="project-title-row">
      {logo && (
        <img
          className="project-logo"
          src={logo.src}
          style={logo.size ? {
            width: logo.size.width,
            height: logo.size.height,
            flexBasis: logo.size.width,
          } : undefined}
          alt=""
          aria-hidden="true"
        />
      )}
      {linkTo ? (
        <h2 className="project-title">
          <Link to={linkTo}>{project.title}</Link>
        </h2>
      ) : title}
    </div>
  );
}
