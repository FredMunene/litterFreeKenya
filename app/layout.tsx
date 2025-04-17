import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { ChatWidgetWrapper } from "@/components/nature-chatbot/chat-widget-wrapper"

// Elegant serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

// Clean sans-serif for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "LitterFreeKenya - Environmental Conservation",
  description: "Protecting our planet through conservation, education, and community action.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        {children}
        <ChatWidgetWrapper />
      </body>
    </html>
  )
}


import './globals.css'