import "./globals.css";

export const metadata = {
  title: "VisualizadorAlgoritmos",
  description: "Aprende algoritmos paso a paso de una forma más cómoda, dónde puedes hacer tus pruebas y ver el resultado al instante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
