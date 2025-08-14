import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Visualizador de Algoritmos",
  description: "Aprende algoritmos paso a paso de una forma más cómoda, dónde puedes hacer tus propias pruebas y ver los resultados en tiempo real",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
