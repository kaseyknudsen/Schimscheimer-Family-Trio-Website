import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Schimscheimer Family Trio",
  description: "Experimental Jazz Trio",
  keywords:
    "Jazz, Jazz improvisation, Experimental, Electronics, Saxophone, Drums, Synthesizers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={raleway.className}>
        {/* overlay */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}
