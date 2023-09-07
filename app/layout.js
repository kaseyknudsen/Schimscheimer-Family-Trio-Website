import "./globals.css";
import {
  Raleway,
  Playfair_Display,
  Cousine,
  Montserrat,
  Cutive_Mono,
} from "next/font/google";
import Navbar from "./components/Navbar";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const cutive = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const cousine = Cousine({
  weight: ["400", "700"],
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
      
      <body suppressHydrationWarning={true} className={cutive.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
