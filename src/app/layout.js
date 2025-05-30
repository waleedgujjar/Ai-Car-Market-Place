import Header from "../components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const  inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Vehiql",
  description: "Find Your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
