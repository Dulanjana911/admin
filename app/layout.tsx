import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/lib/providers";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin | Smart Car Park",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Providers>
          <Navigation/>
            {children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
