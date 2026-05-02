import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Elizabeth Gunn & Co. | ArkanHOG",
  description: "Official home of The ArkanHOG® and premium custom apparel designed by artist Elizabeth Gunn. Fayetteville, Arkansas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
