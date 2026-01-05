import "./globals.css";

import { Delius, Meie_Script } from "next/font/google";

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
});

const meieScript = Meie_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-meie-script",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${delius.variable} ${meieScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
