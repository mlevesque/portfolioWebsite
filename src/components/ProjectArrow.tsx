import './ProjectArrow.css';

type ProjectArrowProps = {
  direction?: 'left' | 'right';
};

export function ProjectArrow({ direction = 'right' }: ProjectArrowProps) {
  return <span className={`project-arrow project-arrow-${direction}`} aria-hidden="true" />;
}
