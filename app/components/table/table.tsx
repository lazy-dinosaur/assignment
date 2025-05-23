import {
  TABLE_HEIGHT,
  TABLE_INNER_HEIGHT,
  TABLE_INNER_WIDTH,
  TABLE_WIDTH,
} from "@/app/constants";
import { Data, Row } from "./data";

import React from "react";
import { useGetScale } from "@/app/contexts/ResponsiveContext";

// 셀 내용 렌더링을 위한 헬퍼 함수
const renderCellContent = (
  content: Row[keyof Omit<Row, "label" | "subLabel">],
  getScale: (value: number) => number,
) => {
  if (content === null || content === undefined) return "";
  if (typeof content === "string")
    return (
      <span
        style={{
          fontSize: getScale(12),
        }}
      >
        {content}
      </span>
    );

  if ("main" in content && "sub" in content) {
    // SajuCellCharacter
    return (
      <div
        className={`flex flex-col items-center justify-center ${content.bgColorClass} ${content.textColorClass} aspect-square`}
        style={{ borderRadius: getScale(14) }}
      >
        <span style={{ fontSize: getScale(8) }}>{content.kor}</span>
        <span
          className="font-semibold"
          style={{
            fontSize: getScale(25),
            lineHeight: 1.2,
          }}
        >
          {content.main}
        </span>
        <span
          className=""
          style={{
            fontSize: getScale(8),
          }}
        >
          {content.sub}
        </span>
      </div>
    );
  }

  if ("items" in content) {
    // SajuCellMulti
    return (
      <div className="flex flex-col items-center justify-center space-y-0.5">
        {content.items.map((item, index) => (
          <div key={index} className="text-center">
            <span
              className="font-semibold"
              style={{
                fontSize: getScale(14),
              }}
            >
              {item.text}
            </span>
            {item.subText && (
              <span
                className="block"
                style={{
                  fontSize: getScale(10),
                }}
              >
                {item.subText}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  if ("text" in content) {
    // SajuCellSimple
    return (
      <div className="text-center">
        <span
          className="font-semibold"
          style={{
            fontSize: getScale(14),
          }}
        >
          {content.text}
        </span>
        {content.subText && (
          <span
            className="block"
            style={{
              fontSize: getScale(10),
            }}
          >
            {content.subText}
          </span>
        )}
      </div>
    );
  }
  return null;
};

export default function Table() {
  const width = (TABLE_INNER_WIDTH / TABLE_WIDTH) * 100;
  const height = (TABLE_INNER_HEIGHT / TABLE_HEIGHT) * 100;
  const columns: (keyof Omit<Row, "label" | "subLabel">)[] = [
    "hour",
    "day",
    "month",
    "year",
  ];
  const columnHeaders = ["時", "日", "月", "年"];

  const getScale = useGetScale();

  return (
    <table
      className="table-fixed text-center text-black"
      style={{
        width: `${width}%`,
        height: `${height}%`,
        marginBottom: getScale(26),
      }}
    >
      <thead>
        <tr className="" style={{ fontSize: getScale(21) }}>
          <th className=""></th>
          {columnHeaders.map((header, idx) => (
            <th
              key={header}
              className={`border-x-[1px] border-[#8B8B8B] ${idx == 0 ? "border-l-black border-l-[2px]" : ""} ${idx == columnHeaders.length - 1 ? "border-r-black border-r-[2px]" : ""}`}
              style={{
                paddingLeft: getScale(22.5) / 2,
                paddingRight: getScale(22.5) / 2,
                paddingBottom: getScale(15) / 2,
                paddingTop: getScale(15) / 2,
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Data.map((row, rowIndex) => (
          <tr key={rowIndex} className={`border-r-2`}>
            <td
              className={`border-y-[2px] border-r-[2px] ${rowIndex == 1 ? "border-b-[#9B9B9B] border-b-[1px]" : ""} ${rowIndex == 2 ? "border-t-[#9B9B9B] border-t-[1px]" : ""} align-middle`}
            >
              <span
                className="align-middle font-semibold"
                style={{
                  fontSize: getScale(14),
                }}
              >
                {row.label}
              </span>
              {row.subLabel && (
                <span
                  className="block"
                  style={{
                    fontSize: getScale(10),
                  }}
                >
                  {row.subLabel}
                </span>
              )}
            </td>
            {columns.map((colKey) => (
              <td
                key={`${rowIndex}-${colKey}`}
                className={`border-y-[2px] border-r-[#9B9B9B] border-r-[1px] text-center align-middle bg-white ${rowIndex == 1 ? "border-b-[#9B9B9B] border-b-[1px]" : ""} ${rowIndex == 2 ? "border-t-[#9B9B9B] border-t-[1px]" : ""}`}
                style={{
                  padding: getScale(5),
                }}
              >
                {renderCellContent(row[colKey], getScale)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
