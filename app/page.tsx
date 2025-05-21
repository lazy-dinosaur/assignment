"use client";
import Image from "next/image";
import { useRef } from "react";
import { findCenter } from "../libs";
import {
  FIRST_BUBBLE_WIDTH,
  FIRST_BUBBLE_HEIGHT,
  FIRST_BUBBLE_TEXT_WIDTH,
  FIRST_BUBBLE_TEXT_HEIGHT,
  USER_NAME,
  SECOND_BUBBLE_HEIGHT,
  SECOND_BUBBLE_TEXT_HEIGHT,
  SECOND_BUBBLE_TEXT_WIDTH,
  SECOND_BUBBLE_WIDTH,
} from "../constants";
import useTextSize from "@/hooks/useTextSize";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const firstTextSize = useTextSize(imageRef, 18.5);
  const firstBubble = findCenter({
    x: 24,
    y: 624,
    width: FIRST_BUBBLE_WIDTH,
    height: FIRST_BUBBLE_HEIGHT,
    textWidth: FIRST_BUBBLE_TEXT_WIDTH,
    textHeight: FIRST_BUBBLE_TEXT_HEIGHT,
  });
  const secondBubble = findCenter({
    x: 24,
    y: 993,
    width: SECOND_BUBBLE_WIDTH,
    height: SECOND_BUBBLE_HEIGHT,
    textWidth: SECOND_BUBBLE_TEXT_WIDTH,
    textHeight: SECOND_BUBBLE_TEXT_HEIGHT,
  });

  return (
    <div className="max-w-md mx-auto bg-[#F3F2EF] w-full">
      <div className="relative">
        <Image
          ref={imageRef}
          alt="메인 이미지"
          src="/main1.png"
          width={750}
          height={4162}
          className="w-full h-full"
          priority
        />
        <div
          className="absolute text-black flex items-center justify-center bg-red rounded-lg break-keep wrap-break-word"
          style={{
            top: `${firstBubble.resultY}%`,
            left: `${firstBubble.resultX}%`,
            transform: "translate(-50%, -50%)",
            width: `${firstBubble.bubbleWidthPercent}%`,
            height: `${firstBubble.bubbleHeightPercent}%`,
          }}
        >
          <span
            className="text-center"
            style={{
              fontSize: firstTextSize,
              width: `${firstBubble.textWidthPercent}%`,
              height: `${firstBubble.textHeightPercent}%`,
            }}
          >
            {`이제 본격적으로 ${USER_NAME}님의 사주팔자를 분석해볼 차례네요.`}
          </span>
        </div>
        <div
          className="absolute text-black flex items-center justify-center bg-red rounded-lg break-keep wrap-break-word"
          style={{
            top: `${secondBubble.resultY}%`,
            left: `${secondBubble.resultX}%`,
            transform: "translate(-50%, -50%)",
            width: `${secondBubble.bubbleWidthPercent}%`,
            height: `${secondBubble.bubbleHeightPercent}%`,
          }}
        >
          <span
            className="text-center"
            style={{
              fontSize: firstTextSize,
              width: `${secondBubble.textWidthPercent}%`,
              height: `${secondBubble.textHeightPercent}%`,
            }}
          >
            {`제가 ${USER_NAME}님의 사주를 보기 쉽게 표로 정리했어요`}
          </span>
        </div>
      </div>
    </div>
  );
}
