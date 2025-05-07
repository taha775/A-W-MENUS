import type { Metadata } from 'next';
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google"; // Import GoogleAnalytics

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'A&W Menus',
  description: 'Explore our delicious A&W menu offerings, from classic burgers to refreshing beverages.',
  metadataBase: new URL('https://www.aandwmenu.com/'),
  openGraph: {
    title: 'A&W Menus',
    description: 'Explore our delicious A&W menu offerings, from classic burgers to refreshing beverages.',
    url: 'https://www.aandwmenu.com/',
    siteName: 'A&W Menus',
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXshjbE_dUZi8y70a0DZW8bU9tIQRBsvvIA&s',
        width: 800,
        height: 600,
        
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&W Menus',
    description: 'Explore our delicious A&W menu offerings, from classic burgers to refreshing beverages.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXshjbE_dUZi8y70a0DZW8bU9tIQRBsvvIA&s'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <ResponsiveNav />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" /> {/* Replace with your GA4 Measurement ID */}
      </body>
    </html>
  );
}
