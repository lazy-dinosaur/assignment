import { getTableDimension } from "@/app/libs";
import Borders from "./border-component";
import Patterns from "./patterns-component";
import { useScaleValues } from "@/app/contexts/ResponsiveContext";
import Title from "./title-component";
import Table from "./table";

export default function TableComponent() {
  const { tableTop, tableWidth, tableLeft } = getTableDimension();
  const { tableThickBorder } = useScaleValues();

  return (
    <div
      className={`absolute bg-[#F5F3EC] border-[#1B2F49] flex items-center flex-col`}
      style={{
        top: `${tableTop}%`,
        width: `${tableWidth}%`,
        left: `${tableLeft}%`,
        borderWidth: tableThickBorder,
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Borders />
      <Patterns />
      <Title />
      <Table />
    </div>
  );
}
