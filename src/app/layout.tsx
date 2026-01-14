import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.variable}>{children}</body>
    </html>
  );
}
