"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { PetalButton } from "@/components/ui/petal-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-softpink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-forest-500" />
            <span className="font-serif text-xl font-bold text-forest-500">LitterFreeKenya</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-black hover:text-forest-500 transition-colors">
              About Us
            </Link>
            <Link href="#activities" className="text-black hover:text-forest-500 transition-colors">
              Our Work
            </Link>
            <Link href="#impact" className="text-black hover:text-forest-500 transition-colors">
              Impact
            </Link>
            <Link href="/plant-a-tree" className="text-black hover:text-forest-500 transition-colors">
              Plant a Tree
            </Link>
            <Link href="#contact" className="text-black hover:text-forest-500 transition-colors">
              Contact
            </Link>
            <PetalButton
              className="bg-forest-500 hover:bg-forest-600 text-white"
              petalType="lily"
              petalColor="green"
              petalIntensity="low"
            >
              Get Involved
            </PetalButton>
          </nav>

          <button className="md:hidden text-forest-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-softpink-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-black hover:text-forest-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#activities"
              className="text-black hover:text-forest-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="#impact"
              className="text-black hover:text-forest-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              href="/plant-a-tree"
              className="text-black hover:text-forest-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plant a Tree
            </Link>
            <Link
              href="#contact"
              className="text-black hover:text-forest-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <PetalButton
              className="bg-forest-500 hover:bg-forest-600 text-white w-full"
              petalType="lily"
              petalColor="green"
              petalIntensity="low"
            >
              Get Involved
            </PetalButton>
          </div>
        </div>
      )}
    </header>
  )
}
