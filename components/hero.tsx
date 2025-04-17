"use client"

import { PetalButton } from "@/components/ui/petal-button"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-pattern-dots">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-softpink-100 text-forest-600 text-sm font-medium">
              Preserving Nature Together
            </div>
            <h1 className="heading-elegant text-4xl md:text-5xl lg:text-6xl font-bold text-forest-500 leading-tight">
              Protecting Our Planet for Future Generations
            </h1>
            <p className="text-lg text-black max-w-lg">
              We're dedicated to conserving biodiversity, restoring ecosystems, and promoting sustainable practices
              through community-driven initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PetalButton
                className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-6"
                petalType="rose"
                petalColor="green"
                petalIntensity="medium"
              >
                Join Our Mission
              </PetalButton>
              <PetalButton
                variant="outline"
                className="border-forest-500 text-forest-500 hover:bg-softpink-50 px-8 py-6"
                petalType="daisy"
                petalColor="pink"
                petalIntensity="low"
              >
                Learn More
              </PetalButton>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] border-2 border-softpink-100 rounded-lg bg-white/50 overflow-hidden shadow-lg">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/videos/tree-growth.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
