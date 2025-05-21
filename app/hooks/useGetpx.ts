import { MAX_WIDTH } from "@/app/constants";
import { useEffect, useState } from "react";

type SizeObject = {
  [key: string]: number;
};

const useGetpx = (
  imageRef: React.RefObject<HTMLImageElement | null>,
  sizes: SizeObject,
) => {
  const [pxValues, setPxValues] = useState<SizeObject>(sizes);

  useEffect(() => {
    const updateSizes = () => {
      if (imageRef.current) {
        const currentWidth = imageRef.current.width;
        const scaleFactor = currentWidth / MAX_WIDTH;

        const newSizes: SizeObject = {};
        Object.entries(sizes).forEach(([key, size]) => {
          newSizes[key] = Math.min(size * scaleFactor, size);
        });

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
  }, []);

  return pxValues;
};

export default useGetpx;
