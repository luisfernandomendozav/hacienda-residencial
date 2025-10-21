import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa en Venta - Hacienda Residencial | Lujo y Estilo Zen",
  description: "Residencia única de lujo con diseño Zen japonés. 341 m² de construcción en 1230 m² de terreno. 3 recámaras, patio con jardín oriental y amenidades exclusivas.",
  keywords: ["casa en venta", "hacienda residencial", "lujo", "zen", "propiedad premium"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
