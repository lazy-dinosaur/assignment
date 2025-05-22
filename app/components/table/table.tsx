import {
  TABLE_HEIGHT,
  TABLE_INNER_HEIGHT,
  TABLE_INNER_WIDTH,
  TABLE_WIDTH,
} from "@/app/constants";

export default function Table() {
  const width = (TABLE_INNER_WIDTH / TABLE_WIDTH) * 100;
  const height = (TABLE_INNER_HEIGHT / TABLE_HEIGHT) * 100;
  return (
    <table
      className="bg-black"
      style={{
        width: `${width}%`,
        height: `${height}%`,
      }}
    ></table>
  );
}
