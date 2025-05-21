export default function Borders({
  tableThinBorder,
  gap,
}: {
  tableThinBorder: number;
  gap: number;
}) {
  return (
    <>
      <div
        className={`absolute flex h-full`}
        style={{
          border: `${tableThinBorder}px solid #2B557E`,
          left: gap,
        }}
      />
      <div
        className={`absolute flex h-full`}
        style={{
          border: `${tableThinBorder}px solid #2B557E`,
          right: gap,
        }}
      />
      <div
        className={`absolute flex w-full`}
        style={{
          border: `${tableThinBorder}px solid #2B557E`,
          top: gap,
        }}
      />
      <div
        className={`absolute flex w-full`}
        style={{
          border: `${tableThinBorder}px solid #2B557E`,
          bottom: gap,
        }}
      />
    </>
  );
}
