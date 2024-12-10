import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "VisualizadorAlgoritmos",
  description: "Aprende algoritmos paso a paso de una forma más cómoda, dónde puedes hacer tus pruebas y ver el resultado al instante",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
