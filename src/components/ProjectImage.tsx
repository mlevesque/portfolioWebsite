interface SideImageProps {
  src: string;
  side?: "left" | "right";
  caption?: string;
  children: React.ReactNode;
}

export function SideImage({
  src,
  side = "right",
  caption,
  children
}: SideImageProps) {
  return (
    <div className={`side-image side-image-${side}`}>
      <figure>
        <img src={src} alt="" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      <div className="side-image-content">
        {children}
      </div>
    </div>
  );
}
