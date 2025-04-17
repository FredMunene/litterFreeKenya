import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Activities from "@/components/activities"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

// Define your custom flower images here
const customFlowerImages = [
  "/images/flowers/flower1.svg",
  // Add more flower image paths as needed
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink-50 via-white to-green-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <CallToAction />
      </main>
      <Footer flowerImages={customFlowerImages} />
    </div>
  )
}
