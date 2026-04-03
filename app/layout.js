import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Class 12 Result 2083 - NEB",
  description:
    "Check Class 12 Result 2083 Online with College Info Nepal for FREE. Your Class 12 GPA is just a click",
  icons: {
    icon: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    apple: "/assets/icon.png",
  },
  verification: {
    google: "In_u6RGEpUbj3PhoaLjXNsloEjIUZ2cXTcYqfLi_iYU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3H8YGYXHPP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3H8YGYXHPP', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}