import './ProjectContent.css';

type ProjectImageProps = {
  src: string;
  alt: string;
  layout?: 'inline' | 'left' | 'right';
  caption?: string;
};

export function ProjectImage({ src, alt, layout = 'inline', caption }: ProjectImageProps) {
  return (
    <figure className={`project-content-image project-content-image-${layout}`}>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
