import { TOTAL_WIDTH, TOTAL_HEIGHT } from "./constants";

export const findCenter = ({
  x,
  y,
  width,
  height,
  textWidth,
  textHeight,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  textWidth: number;
  textHeight: number;
}) => {
  const bubbleLocationX = x;
  const bubbleLocationY = y;
  const bubbleCenterX = bubbleLocationX + width / 2;
  const bubbleCenterY = bubbleLocationY + height / 2;
  const resultX = (bubbleCenterX / TOTAL_WIDTH) * 100;
  const resultY = (bubbleCenterY / TOTAL_HEIGHT) * 100;
  const bubbleWidthPercent = (width / TOTAL_WIDTH) * 100;
  const bubbleHeightPercent = (height / TOTAL_HEIGHT) * 100;
  const textWidthPercent = (textWidth / width) * 100;
  const textHeightPercent = (textHeight / height) * 100;
  return {
    resultX,
    resultY,
    bubbleWidthPercent,
    bubbleHeightPercent,
    textWidthPercent,
    textHeightPercent,
  };
};
