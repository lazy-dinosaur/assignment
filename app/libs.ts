import {
  TOTAL_WIDTH,
  TOTAL_HEIGHT,
  FIRST_BUBBLE_HEIGHT,
  FIRST_BUBBLE_TEXT_HEIGHT,
  FIRST_BUBBLE_TEXT_WIDTH,
  FIRST_BUBBLE_WIDTH,
  FIRST_BUBBLE_X,
  FIRST_BUBBLE_Y,
  SECOND_BUBBLE_HEIGHT,
  SECOND_BUBBLE_TEXT_HEIGHT,
  SECOND_BUBBLE_TEXT_WIDTH,
  SECOND_BUBBLE_WIDTH,
  SECOND_BUBBLE_X,
  SECOND_BUBBLE_Y,
  TABLE_Y,
  TABLE_WIDTH,
  TABLE_HEIGHT,
  TABLE_X,
} from "./constants";

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

export const getTableDimension = () => {
  const tableTop = (TABLE_Y / TOTAL_HEIGHT) * 100;
  const tableWidth = (TABLE_WIDTH / TOTAL_WIDTH) * 100;
  const tableHeight = (TABLE_HEIGHT / TOTAL_HEIGHT) * 100;
  const tableLeft = (TABLE_X / TOTAL_WIDTH) * 100;
  return { tableTop, tableWidth, tableHeight, tableLeft };
};

export const getName = (string: string) => string.slice(1, 3);

export const firstBubble = findCenter({
  x: FIRST_BUBBLE_X,
  y: FIRST_BUBBLE_Y,
  width: FIRST_BUBBLE_WIDTH,
  height: FIRST_BUBBLE_HEIGHT,
  textWidth: FIRST_BUBBLE_TEXT_WIDTH,
  textHeight: FIRST_BUBBLE_TEXT_HEIGHT,
});
export const secondBubble = findCenter({
  x: SECOND_BUBBLE_X,
  y: SECOND_BUBBLE_Y,
  width: SECOND_BUBBLE_WIDTH,
  height: SECOND_BUBBLE_HEIGHT,
  textWidth: SECOND_BUBBLE_TEXT_WIDTH,
  textHeight: SECOND_BUBBLE_TEXT_HEIGHT,
});
