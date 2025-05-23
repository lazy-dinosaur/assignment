import { USER_DATE, USER_NAME } from "@/app/constants";
import { useGetScale } from "@/app/contexts/ResponsiveContext";

export default function Title() {
  const getScale = useGetScale();
  return (
    <div
      className={`text-[#424242] flex flex-col items-center`}
      style={{
        paddingTop: `${getScale(40)}px`,
        marginBottom: `${getScale(26)}px`,
      }}
    >
      <h4
        style={{
          fontSize: `${getScale(18)}px`,
          marginBottom: `${getScale(8)}px`,
        }}
      >
        {USER_NAME}님의 사주
      </h4>
      <h2
        className="font-bold"
        style={{
          fontSize: `${getScale(22)}px`,
        }}
      >
        {USER_DATE.getFullYear()}년 {USER_DATE.getMonth() + 1}월{" "}
        {USER_DATE.getDate()}일 {USER_DATE.getHours()}:{USER_DATE.getMinutes()}
      </h2>
    </div>
  );
}
