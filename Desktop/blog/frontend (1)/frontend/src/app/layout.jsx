import "../styles/globals.css";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingNewsBar from "@/components/BreakingNewsBar";
import { getTopNews } from "@/lib/api";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "FilmyCharcha — Entertainment, Sports & OTT News",
    template: "%s | FilmyCharcha",
  },
  description: "Latest Bollywood, Hollywood, Sports and OTT news updates.",
};

export default async function RootLayout({ children }) {
  let breaking = [];

  try {
    breaking = await getTopNews();
  } catch {
    breaking = [];
  }

  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable}`}
    >
      <body className="font-body bg-white text-ink">

        <Header />

        <BreakingNewsBar posts={breaking} />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}