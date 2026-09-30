import type { CSSProperties, ReactNode } from 'react';
import './ProjectContent.css';

type ContentBoxRowProps = {
  children: ReactNode;
};

type ContentBoxProps = {
  children: ReactNode;
  width?: string;
  backgroundColor?: string;
  outlineColor?: string;
  transparent?: boolean;
};

type FlowStepProps = {
  children: ReactNode;
  indent?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  arrow?: boolean;
};

type FlowStackProps = {
  children: ReactNode;
  width?: string;
};

export function FlowStack({ children, width = '100%' }: FlowStackProps) {
  return (
    <div className="project-content-flow" style={{ '--flow-stack-width': width } as CSSProperties}>
      {children}
    </div>
  );
}

export function FlowStep({
  children,
  indent = '0px',
  backgroundColor = '#ffffff',
  borderColor = '#637d95',
  textColor,
  arrow = true,
}: FlowStepProps) {
  const style = {
    '--flow-indent': indent,
    '--flow-background': backgroundColor,
    '--flow-border': borderColor,
    '--flow-text-color': textColor,
  } as CSSProperties;

  return (
    <div
      className={`project-content-flow-step${arrow ? '' : ' project-content-flow-step-last'}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function ContentBoxRow({ children }: ContentBoxRowProps) {
  return <div className="project-content-box-row">{children}</div>;
}

export function ContentBox({
  children,
  width = '100%',
  backgroundColor = '#ffffff',
  outlineColor = '#d5dce3',
  transparent = false,
}: ContentBoxProps) {
  const style: CSSProperties = {
    width,
    backgroundColor: transparent ? 'transparent' : backgroundColor,
    borderColor: transparent ? 'transparent' : outlineColor,
  };

  return (
    <div className="project-content-box" style={style}>
      {children}
    </div>
  );
}

type ProjectImageProps = {
  src: string;
  alt: string;
  layout?: 'inline' | 'left' | 'right';
  caption?: string;
  width?: string;
};

export function ProjectImage({ src, alt, layout = 'inline', caption, width }: ProjectImageProps) {
  return (
    <figure
      className={`project-content-image project-content-image-${layout}`}
      style={width ? { width } : undefined}
    >
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
