import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({
  src,
  className,
  alt,
  srcSet,
  sizes,
  width,
  height,
  preload,
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (preload && imgRef.current) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imgRef.current.src = src;
      };
    }
  }, [preload, src]);

  return (
    <LazyLoadImage
      className={className || ""}
      alt={alt}
      effect="blur"
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
    />
  );
};

export default Img;
