// components/sajuData.ts (예시 파일)

interface CellCharacter {
  kor: string;
  main: string;
  sub: string;
  bgColorClass: string; // Tailwind CSS 배경 클래스
  textColorClass: string; // Tailwind CSS 텍스트 색상 클래스
}

interface CellSimple {
  text: string;
  subText?: string; // 괄호 안의 작은 글씨
}

interface CellMulti {
  items: { text: string; subText?: string }[];
}

type CellContent = CellCharacter | CellSimple | CellMulti | string | null;

export interface Row {
  label: string;
  subLabel?: string;
  hour: CellContent;
  day: CellContent;
  month: CellContent;
  year: CellContent;
}

export const Data: Row[] = [
  {
    label: "十星",
    subLabel: "(십성)",
    hour: { text: "傷官", subText: "(상관)" },
    day: { text: "比肩", subText: "(비견)" },
    month: { text: "傷官", subText: "(상관)" },
    year: { text: "傷官", subText: "(상관)" },
  },
  {
    label: "天干",
    subLabel: "(천간)",
    hour: {
      kor: "임",
      main: "壬",
      sub: "陽水",
      bgColorClass: "bg-[#2F2F2F]",
      textColorClass: "text-white",
    },
    day: {
      kor: "정",
      main: "丁",
      sub: "陰火",
      bgColorClass: "bg-[#C23030]",
      textColorClass: "text-white",
    },
    month: {
      kor: "계",
      main: "癸",
      sub: "陰水",
      bgColorClass: "bg-[#2F2F2F]",
      textColorClass: "text-white",
    },
    year: {
      kor: "계",
      main: "癸",
      sub: "陰水",
      bgColorClass: "bg-[#2F2F2F]",
      textColorClass: "text-white",
    },
  },
  {
    label: "地支",
    subLabel: "(지지)",
    hour: {
      kor: "인",
      main: "寅",
      sub: "陽木",
      bgColorClass: "bg-[#18868C]",
      textColorClass: "text-white",
    },
    day: {
      kor: "사",
      main: "巳",
      sub: "陰火",
      bgColorClass: "bg-[#C23030]",
      textColorClass: "text-white",
    },
    month: {
      kor: "해",
      main: "亥",
      sub: "陰水",
      bgColorClass: "bg-[#2F2F2F]",
      textColorClass: "text-white",
    },
    year: {
      kor: "유",
      main: "酉",
      sub: "陰金",
      bgColorClass: "bg-[#F9F9F9] border-[1px]",
      textColorClass: "text-black",
    }, // 酉는 흰색 배경에 검은 글씨
  },
  {
    label: "十星",
    subLabel: "(십성)",
    hour: { text: "比肩", subText: "(비견)" },
    day: { text: "劫財", subText: "(겁재)" },
    month: { text: "食神", subText: "(식신)" },
    year: { text: "偏財", subText: "(편재)" },
  },
  {
    label: "十二運星",
    subLabel: "(십이운성)",
    hour: { text: "死", subText: "(사)" },
    day: { text: "帝旺", subText: "(제왕)" },
    month: { text: "胎", subText: "(태)" },
    year: { text: "長生", subText: "(장생)" },
  },
  {
    label: "十二神殺",
    subLabel: "(십이신살)",
    hour: { text: "劫殺", subText: "(겁살)" },
    day: { text: "地殺", subText: "(지살)" },
    month: { text: "驛馬殺", subText: "(역마살)" },
    year: { text: "將星殺", subText: "(장성살)" },
  },
  {
    label: "貴人",
    subLabel: "(귀인)",
    hour: "(없음)",
    day: "(없음)",
    month: { text: "天乙", subText: "(천을귀인)" },
    year: {
      items: [
        { text: "天乙", subText: "(천을귀인)" },
        { text: "太極", subText: "(태극귀인)" },
        { text: "文昌", subText: "(문창귀인)" },
      ],
    },
  },
];
