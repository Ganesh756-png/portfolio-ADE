import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ganesh Thakur | Azure Data Engineer & Analytics Specialist",
  description: "Portfolio of Ganesh Thakur, a B.Sc. IT student and Azure Data Engineering enthusiast. Experienced in SQL, Power BI, SSMS, Azure Data Factory, ADLS, and building automated ETL/ELT pipelines.",
  keywords: [
    "Azure Data Engineer",
    "Data Analyst",
    "Power BI Specialist",
    "Ganesh Thakur Portfolio",
    "Azure Data Factory",
    "Data Engineering Portfolio",
    "ETL Pipelines",
    "Sawantwadi",
    "University of Mumbai",
  ],
  authors: [{ name: "Ganesh Thakur" }],
  openGraph: {
    title: "Ganesh Thakur | Azure Data Engineer Portfolio",
    description: "Aspiring Azure Data Engineer passionate about cloud data warehousing, automated ETL, and data analytics pipelines.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="font-inter min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-azure-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
