import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wordle Clone",
  description: "Clone of popular NYT game, Wordle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
