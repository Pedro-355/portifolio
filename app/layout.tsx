import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Vieira | DevOps Engineer",
  description:
    "DevOps Engineer focused on Cloud, Automation, Infrastructure, CI/CD and Observability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}