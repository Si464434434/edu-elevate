import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduLuv | Love Learning Again",
  description: "EduLuv is a modern learning platform for focused, joyful study.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
