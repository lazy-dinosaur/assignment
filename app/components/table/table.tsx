import { getTableDimension } from "@/app/libs";
import Borders from "./border-component";
import Patterns from "./patterns-component";
import { USER_NAME } from "@/app/constants";
type TableProps = {
  tableThickBorder: number;
  tableThinBorder: number;
  firstSvgTop: number;
  secondSvgTop: number;
  gap: number;
};
export default function Table({
  tableThickBorder,
  tableThinBorder,
  firstSvgTop,
  secondSvgTop,
  gap,
}: TableProps) {
  const { tableTop, tableWidth, tableHeight, tableLeft } = getTableDimension();

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
      <Borders gap={gap} tableThinBorder={tableThinBorder} />
      <Patterns gap={gap} firstTop={firstSvgTop} secondTop={secondSvgTop} />
      <div className={`text-[#424242]`} style={{}}>
        <h4>{USER_NAME}님의 사주</h4>
        <h2></h2>
      </div>
    </div>
  );
}
