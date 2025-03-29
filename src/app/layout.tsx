import "@styles/globals.css";
import type { Metadata } from "next";
import { montserrat, ptSerif } from "@utils/fonts";
import Header from "@components/layout/header/Header";
import Footer from "@components/layout/footer/Footer";



export const metadata: Metadata = {
  title: "NWB - agence web a Mantes la Jolie",
  description: "NWB est une agence web à Mantes la Jolie spécialisée dans la création de sites web sur mesure pour les entreprises et les particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="fr" className={`${montserrat.variable} ${ptSerif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
