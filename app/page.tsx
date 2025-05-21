"use client";
import Image from "next/image";
import { useRef } from "react";
import { firstBubble, getName, getTableDimension, secondBubble } from "./libs";
import { USER_NAME } from "./constants";
import Bubble from "./components/bubble";
import useGetpx from "./hooks/useGetpx";
import Table from "./components/table/table";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);
  const {
    firstSvgTop,
    secondSvgTop,
    gap,
    fontSize,
    tableThickBorder,
    tableThinBorder,
  } = useGetpx(imageRef, {
    fontSize: 18,
    tableThickBorder: 3,
    tableThinBorder: 1,
    gap: 5,
    firstSvgTop: 42,
    secondSvgTop: 23,
  });
  const { tableTop, tableWidth, tableHeight, tableLeft } = getTableDimension();

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
        {fontSize && (
          <>
            <Bubble
              text={`이제 본격적으로 ${getName(USER_NAME)}님의 사주팔자를 분석해볼 차례네요.`}
              textSize={fontSize}
              bubble={firstBubble}
            />
            <Bubble
              text={`제가 ${getName(USER_NAME)}님의 사주를 보기 쉽게 표로 정리했어요`}
              textSize={fontSize}
              bubble={secondBubble}
            />
            <Table
              {...{
                tableLeft,
                tableTop,
                tableWidth,
                tableHeight,
                tableThickBorder,
                tableThinBorder,
                gap,
                firstSvgTop,
                secondSvgTop,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
