import { MAX_WIDTH } from "@/app/constants";
import { useEffect, useState, useCallback } from "react";

const useGetpx = (imageRef: React.RefObject<HTMLImageElement | null>) => {
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const getScale = useCallback((originalSize: number): number => {
    return Math.min(originalSize * scaleFactor, originalSize);
  }, [scaleFactor]);

  useEffect(() => {
    const updateScale = () => {
      if (imageRef.current) {
        const currentWidth = imageRef.current.width;
        const newScaleFactor = currentWidth / MAX_WIDTH;
        setScaleFactor(newScaleFactor);
        setIsImageLoaded(true);
      }
    };

    if (imageRef.current && imageRef.current.complete) {
      updateScale();
    }

    const currentImage = imageRef.current;
    if (currentImage) {
      currentImage.addEventListener("load", updateScale);
    }

    const handleResize = () => {
      if (imageRef.current) {
        updateScale();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (currentImage) {
        currentImage.removeEventListener("load", updateScale);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [imageRef]);

  return { getScale, isImageLoaded, scaleFactor };
};

export default useGetpx;
