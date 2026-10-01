import type { Feature } from '../models/ProjectModel';
import { ProjectArrow } from './ProjectArrow';
import './FeaturedWorkGrid.css';

export function FeaturedWorkGrid({ features }: { features: Feature[] }) {
  return (
    <div className="featured-work-grid">
      {features.map((feature) => {
        const href = feature.anchor
          ? `${feature.link}#${feature.anchor}`
          : feature.link;

        return (
          <a
            className="featured-work-card"
            href={href}
            key={`${feature.link}#${feature.anchor ?? ''}`}
          >
            {feature.image && <img src={feature.image} alt="" aria-hidden="true" />}
            <div className="featured-work-card-copy">
              <h3>{feature.title}</h3>
              <h4>{feature.projectName} - {feature.company}</h4>
              <p>{feature.description}</p>
              <ul className="featured-work-card-tags" aria-label={`${feature.title} tags`}>
                {feature.tags.map((tag) => (
                  <li key={tag} className="featured-work-card-tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="featured-work-card-action">
                View project
                <ProjectArrow />
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}