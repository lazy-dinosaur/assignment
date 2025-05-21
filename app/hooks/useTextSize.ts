import { MAX_WIDTH } from "@/app/constants";
import { useEffect, useState } from "react";

const useTextSize = (
  imageRef: React.RefObject<HTMLImageElement | null>,
  textSize: number,
) => {
  const [fontSize, setFontSize] = useState(textSize);

  useEffect(() => {
    const updateFontSize = () => {
      if (imageRef.current) {
        const currentWidth = imageRef.current.width;
        const scaleFactor = currentWidth / MAX_WIDTH;
        const newTextSize = Math.min(textSize * scaleFactor, textSize);
        setFontSize(newTextSize);
      }
    };
    if (imageRef.current && imageRef.current.complete) {
      updateFontSize();
    }
    const currentImage = imageRef.current;
    if (currentImage) {
      currentImage.addEventListener("load", updateFontSize);
    }
    const handleResize = () => {
      if (imageRef.current) {
        updateFontSize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (currentImage) {
        currentImage.removeEventListener("load", updateFontSize);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return fontSize;
};

export default useTextSize;
