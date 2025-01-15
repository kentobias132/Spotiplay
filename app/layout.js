import { Roboto, Nunito } from "next/font/google";
import "./globals.css";

const sourceCode = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-source-code-pro",
});

const sourceSan = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-source-san",
});

export const metadata = {
  title: "Spotiplay",
  description: "Create your custom playlist with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceCode.variable} ${sourceSan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
