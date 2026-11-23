import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata = {
  title: "Jairo Lance | Desarrollador de Software",
  description: "Portafolio de Jairo Lance, desarrollador de software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
