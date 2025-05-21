import localFont from "next/font/local";

export const hanseokbong = localFont({
  src: [
    {
      path: "../public/fonts/GapyeongHanseokbong-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-hanseokbong",
});
