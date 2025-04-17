"use client"

import { useState } from "react"
import { PetalButton } from "@/components/ui/petal-button"
import { SvgPetal } from "@/components/ui/svg-petal"

export default function PetalShowcase() {
  const [activeType, setActiveType] = useState<"rose" | "daisy" | "lily" | "tulip" | "orchid">("rose")
  const [activeColor, setActiveColor] = useState<"green" | "pink" | "white">("green")
  const [activeIntensity, setActiveIntensity] = useState<"low" | "medium" | "high">("medium")

  const petalTypes = [
    { name: "Rose", value: "rose" },
    { name: "Daisy", value: "daisy" },
    { name: "Lily", value: "lily" },
    { name: "Tulip", value: "tulip" },
    { name: "Orchid", value: "orchid" },
  ] as const

  const colorOptions = [
    { name: "Green", value: "green" },
    { name: "Pink", value: "pink" },
    { name: "White", value: "white" },
  ] as const

  const intensityOptions = [
    { name: "Low", value: "low" },
    { name: "Medium", value: "medium" },
    { name: "High", value: "high" },
  ] as const

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-elegant text-3xl font-bold text-forest-500 mb-8 text-center">
            Petal Animation Showcase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-softpink-50 p-6 rounded-lg">
              <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-4">Petal Types</h3>
              <div className="flex flex-wrap gap-4">
                {petalTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                      activeType === type.value ? "bg-forest-100" : "hover:bg-forest-50"
                    }`}
                    onClick={() => setActiveType(type.value as any)}
                  >
                    <SvgPetal type={type.value as any} color="#40916C" />
                    <span>{type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-softpink-50 p-6 rounded-lg">
              <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-4">Settings</h3>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Color</h4>
                <div className="flex gap-4">
                  {colorOptions.map((color) => (
                    <div
                      key={color.value}
                      className={`p-2 rounded cursor-pointer ${
                        activeColor === color.value ? "bg-forest-100" : "hover:bg-forest-50"
                      }`}
                      onClick={() => setActiveColor(color.value as any)}
                    >
                      {color.name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Intensity</h4>
                <div className="flex gap-4">
                  {intensityOptions.map((intensity) => (
                    <div
                      key={intensity.value}
                      className={`p-2 rounded cursor-pointer ${
                        activeIntensity === intensity.value ? "bg-forest-100" : "hover:bg-forest-50"
                      }`}
                      onClick={() => setActiveIntensity(intensity.value as any)}
                    >
                      {intensity.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <PetalButton
              className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-6 text-lg"
              petalType={activeType}
              petalColor={activeColor}
              petalIntensity={activeIntensity}
            >
              Hover or Click Me
            </PetalButton>
          </div>

          <div className="bg-forest-50 p-6 rounded-lg">
            <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-4">How It Works</h3>
            <p className="mb-4">
              Our petal burst animations use SVG images for realistic petal shapes. When you hover over or click a
              button, petals burst outward in a natural, organic pattern.
            </p>
            <p>
              Each button on our site features a unique flower type, with colors that complement our environmental
              theme. The animations are lightweight and optimized for performance across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
