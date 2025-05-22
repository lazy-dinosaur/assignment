import { USER_DATE, USER_NAME } from "@/app/constants";
import { useScaleValues } from "@/app/contexts/ResponsiveContext";

export default function Title() {
  const {
    tableTitleFontSizeSm,
    tableTitleFontSizeLg,
    tableTitlePt,
    tableTitleMb,
    tableTitleGap,
  } = useScaleValues();
  return (
    <div
      className={`text-[#424242] flex flex-col items-center`}
      style={{
        paddingTop: `${tableTitlePt}px`,
        marginBottom: `${tableTitleMb}px`,
      }}
    >
      <h4
        style={{
          fontSize: `${tableTitleFontSizeSm}px`,
          marginBottom: `${tableTitleGap}px`,
        }}
      >
        {USER_NAME}님의 사주
      </h4>
      <h2
        className="font-bold"
        style={{
          fontSize: `${tableTitleFontSizeLg}px`,
        }}
      >
        {USER_DATE.getFullYear()}년 {USER_DATE.getMonth() + 1}월{" "}
        {USER_DATE.getDate()}일 {USER_DATE.getHours()}:{USER_DATE.getMinutes()}
      </h2>
    </div>
  );
}
