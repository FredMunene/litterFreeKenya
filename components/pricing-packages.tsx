"use client"

import { Check } from "lucide-react"
import { PetalButton } from "@/components/ui/petal-button"

interface PricingPackageProps {
  title: string
  price: number
  treeCount: number
  features: string[]
  popular?: boolean
  onSelect: (treeCount: number, price: number) => void
}

function PricingPackage({ title, price, treeCount, features, popular, onSelect }: PricingPackageProps) {
  return (
    <div
      className={`relative rounded-lg border ${
        popular ? "border-forest-500 shadow-lg" : "border-gray-200"
      } bg-white p-6 flex flex-col`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-forest-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-serif font-bold text-forest-700 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-500 ml-1">/ year</span>
      </div>
      <p className="text-forest-600 font-medium mb-4">{treeCount} trees planted and maintained</p>
      <ul className="mb-6 flex-grow space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-forest-500 mr-2 shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <PetalButton
        onClick={() => onSelect(treeCount, price)}
        className={`w-full ${
          popular ? "bg-forest-500 hover:bg-forest-600 text-white" : "bg-forest-100 hover:bg-forest-200 text-forest-700"
        }`}
        petalType={popular ? "rose" : "daisy"}
        petalColor={popular ? "green" : "white"}
        petalIntensity="low"
      >
        Select Package
      </PetalButton>
    </div>
  )
}

interface PricingPackagesProps {
  onSelectPackage: (treeCount: number, price: number) => void
}

export default function PricingPackages({ onSelectPackage }: PricingPackagesProps) {
  const packages = [
    {
      title: "Seedling",
      price: 10,
      treeCount: 1,
      features: [
        "1 tree planted and maintained",
        "GPS coordinates of your tree",
        "Quarterly growth updates",
        "Personalized certificate",
      ],
    },
    {
      title: "Grove",
      price: 50,
      treeCount: 6,
      features: [
        "6 trees planted and maintained",
        "GPS coordinates of your trees",
        "Quarterly growth updates",
        "Personalized certificate",
        "Name your grove",
      ],
      popular: true,
    },
    {
      title: "Forest",
      price: 100,
      treeCount: 20,
      features: [
        "20 trees planted and maintained",
        "GPS coordinates of your trees",
        "Monthly growth updates",
        "Personalized certificate",
        "Name your forest",
        "Recognition on our website",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-forest-600 mb-2">Choose Your Impact</h2>
        <p className="text-gray-600">
          Select a package that fits your commitment to reforestation. Each tree costs $10 to plant and maintain for a
          year.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PricingPackage
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            treeCount={pkg.treeCount}
            features={pkg.features}
            popular={pkg.popular}
            onSelect={onSelectPackage}
          />
        ))}
      </div>

      <div className="mt-8 bg-forest-50 p-4 rounded-lg">
        <p className="text-sm text-forest-700 text-center">
          Want to plant more trees? You can also specify a custom number of trees during checkout.
        </p>
      </div>
    </div>
  )
}
