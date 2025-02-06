import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Script from "next/script"
import type React from "react" // Import React

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ewang'an Tours & Safaris - Explore Africa's Beauty",
  description:
    "Discover unforgettable adventures across stunning Kenya safaris and serene beach destinations with Ewang'an Tours & Safaris.",
  openGraph: {
    title: "Ewang'an Tours & Safaris",
    description: "Discover unforgettable adventures across stunning African safaris and serene beach destinations.",
    url: "https://ewangan-tours.com",
    siteName: "Ewang'an Tours & Safaris",
    images: [
      {
        url: "WhatsApp.png",
        width: 800,
        height: 600,
        alt: "Ewang'an Tours & Safaris Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-markup" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Ewang'an Tours & Safaris",
              "image": "https://WhatsApp1.png",
              "description": "Discover unforgettable adventures across stunning African safaris and serene beach destinations.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Safari Street",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2921",
                "longitude": "36.8219"
              },
              "url": "https://ewangan-tours.com",
              "telephone": "+254123456789",
              "sameAs": [
                "https://www.facebook.com/ewangantours",
                "https://www.instagram.com/ewangantours",
                "https://twitter.com/ewangantours"
              ]
            }
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

