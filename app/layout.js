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
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/50" />
        <Navbar />

        {children}
      </body>
    </html>
  );
}
