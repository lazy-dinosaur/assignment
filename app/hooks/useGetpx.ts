import { MAX_WIDTH } from "@/app/constants";
import { useEffect, useState } from "react";

const useGetpx = <T extends Record<string, number>>(
  imageRef: React.RefObject<HTMLImageElement | null>,
  sizes: T,
): T => {
  const [pxValues, setPxValues] = useState<T>(sizes);

  useEffect(() => {
    const updateSizes = () => {
      if (imageRef.current) {
        const currentWidth = imageRef.current.width;
        const scaleFactor = currentWidth / MAX_WIDTH;

        const newSizes = {} as T;
        (Object.entries(sizes) as [keyof T, number][]).forEach(
          ([key, size]) => {
            newSizes[key] = Math.min(size * scaleFactor, size) as T[keyof T];
          },
        );

        setPxValues(newSizes);
      }
    };

    if (imageRef.current && imageRef.current.complete) {
      updateSizes();
    }

    const currentImage = imageRef.current;
    if (currentImage) {
      currentImage.addEventListener("load", updateSizes);
    }
    const handleResize = () => {
      if (imageRef.current) {
        updateSizes();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (currentImage) {
        currentImage.removeEventListener("load", updateSizes);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [sizes, imageRef]);

  return pxValues;
};

export default useGetpx;

