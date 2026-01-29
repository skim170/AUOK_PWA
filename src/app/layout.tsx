import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auburn-Opelika Korean Community",
  description: "Community hub for jobs, market, clubs, and local stores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
