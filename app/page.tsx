"use client";
import Image from "next/image";
import { firstBubble, getName, secondBubble } from "./libs";
import { USER_NAME } from "./constants";
import Bubble from "./components/bubble";
import Table from "./components/table/table-component";
import {
  ResponsiveProvider,
  useImageRef,
  useIsImageLoaded,
} from "./contexts/ResponsiveContext";

function HomeContent() {
  const imageRef = useImageRef();
  const isImageLoaded = useIsImageLoaded();

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
        {isImageLoaded && (
          <>
            <Bubble
              text={`이제 본격적으로 ${getName(USER_NAME)}님의 사주팔자를 분석해볼 차례네요.`}
              bubble={firstBubble}
            />
            <Bubble
              text={`제가 ${getName(USER_NAME)}님의 사주를 보기 쉽게 표로 정리했어요`}
              bubble={secondBubble}
            />
            <Table />
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ResponsiveProvider>
      <HomeContent />
    </ResponsiveProvider>
  );
}

