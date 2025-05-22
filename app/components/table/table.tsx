import { getTableDimension } from "@/app/libs";
import Borders from "./border-component";
import Patterns from "./patterns-component";
import { USER_NAME } from "@/app/constants";
import { useScaleValues } from "@/app/contexts/ResponsiveContext";

export default function Table() {
  const { tableTop, tableWidth, tableHeight, tableLeft } = getTableDimension();
  const { tableThickBorder } = useScaleValues();

  return (
    <div
      className={`absolute bg-[#F5F3EC] shadow-lg border-[#1B2F49] flex justify-center`}
      style={{
        top: `${tableTop}%`,
        width: `${tableWidth}%`,
        height: `${tableHeight}%`,
        left: `${tableLeft}%`,
        borderWidth: tableThickBorder,
      }}
    >
      <Borders />
      <Patterns />
      <div className={`text-[#424242]`}>
        <h4>{USER_NAME}님의 사주</h4>
        <h2></h2>
      </div>
    </div>
  );
}