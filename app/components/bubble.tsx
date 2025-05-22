import { findCenter } from "@/app/libs";
import { useScaleValues } from "@/app/contexts/ResponsiveContext";

export default function Bubble({
  bubble,
  text,
}: {
  bubble: ReturnType<typeof findCenter>;
  text: string;
}) {
  const { fontSize } = useScaleValues();

  return (
    <div
      className="absolute text-black flex items-center justify-center bg-red rounded-lg break-keep wrap-break-word"
      style={{
        top: `${bubble.resultY}%`,
        left: `${bubble.resultX}%`,
        transform: "translate(-50%, -50%)",
        width: `${bubble.bubbleWidthPercent}%`,
        height: `${bubble.bubbleHeightPercent}%`,
      }}
    >
      <span
        className="text-center"
        style={{
          fontSize: fontSize,
          width: `${bubble.textWidthPercent}%`,
          height: `${bubble.textHeightPercent}%`,
        }}
      >
        {text}
      </span>
    </div>
  );
}