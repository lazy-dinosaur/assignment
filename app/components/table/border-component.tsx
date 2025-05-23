import { useGetScale } from "@/app/contexts/ResponsiveContext";

export default function Borders() {
  const getScale = useGetScale();

  return (
    <>
      <div
        className={`absolute flex h-full`}
        style={{
          border: `${getScale(1)}px solid #2B557E`,
          left: getScale(6),
        }}
      />
      <div
        className={`absolute flex h-full`}
        style={{
          border: `${getScale(1)}px solid #2B557E`,
          right: getScale(6),
        }}
      />
      <div
        className={`absolute flex w-full`}
        style={{
          border: `${getScale(1)}px solid #2B557E`,
          top: getScale(6),
        }}
      />
      <div
        className={`absolute flex w-full`}
        style={{
          border: `${getScale(1)}px solid #2B557E`,
          bottom: getScale(6),
        }}
      />
    </>
  );
}
