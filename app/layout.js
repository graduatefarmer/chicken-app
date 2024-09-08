import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "200", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Home | Chicken Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
