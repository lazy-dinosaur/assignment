import Borders from "./border-component";
import Patterns from "./patterns-component";
type TableProps = {
  tableTop: number;
  tableWidth: number;
  tableHeight: number;
  tableLeft: number;
  tableThickBorder: number;
  tableThinBorder: number;
  firstSvgTop: number;
  secondSvgTop: number;
  gap: number;
};
export default function Table({
  tableTop,
  tableWidth,
  tableHeight,
  tableLeft,
  tableThickBorder,
  tableThinBorder,
  firstSvgTop,
  secondSvgTop,
  gap,
}: TableProps) {
  return (
    <div
      className={`absolute bg-[#F5F3EC] shadow-lg border-[#1B2F49] flex items-center justify-center`}
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
    </div>
  );
}
