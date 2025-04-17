import Image from "next/image"
import Link from "next/link"
import { MapPin, Trash2, TreesIcon as Tree } from "lucide-react"
import { PetalButton } from "@/components/ui/petal-button"

export default function Activities() {
  return (
    <section id="activities" className="py-16 bg-pattern-leaves">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4">Take Action</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Join our community efforts to protect and restore Kenya's environment. Every action makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plant a Tree */}
          <div className="bg-white/90 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image src="/planting-tree.jpg?height=400&width=600" alt="Plant a Tree" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="heading-elegant text-2xl font-bold text-white p-4">Plant a Tree</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-black mb-6">
                Contribute to reforestation efforts by planting trees in areas that need it most. Choose your tree
                species and location, and we'll take care of the rest.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-forest-600">
                  <Tree className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">From $10 per tree</span>
                </div>
                <Link href="/plant-a-tree">
                  <PetalButton
                    className="bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="rose"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Plant Now
                  </PetalButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Organize a Clean-up */}
          <div className="bg-white/90 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="/cleanup.jpeg?height=400&width=600"
                alt="Organize a Clean-up"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="heading-elegant text-2xl font-bold text-white p-4">Organize a Clean-up</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-black mb-6">
                Lead a community clean-up event in your neighborhood. We'll provide resources, supplies, and volunteers
                to help make your clean-up a success.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-forest-600">
                  <Trash2 className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Free to organize</span>
                </div>
                <Link href="/organize-cleanup">
                  <PetalButton
                    className="bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="daisy"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Get Started
                  </PetalButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Check Tree Status */}
          <div className="bg-white/90 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="/trees.jpg?height=400&width=600"
                alt="Check Tree Status"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="heading-elegant text-2xl font-bold text-white p-4">Check Tree Status</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-black mb-6">
                Monitor the growth and health of trees you've planted. Get updates with photos, measurements, and impact
                data for your personal forest.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-forest-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Track your impact</span>
                </div>
                <Link href="/my-trees">
                  <PetalButton
                    className="bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="tulip"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    View Trees
                  </PetalButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/all-activities">
            <PetalButton
              className="bg-white border border-forest-500 text-forest-600 hover:bg-forest-50"
              petalType="orchid"
              petalColor="green"
              petalIntensity="low"
            >
              View All Activities
            </PetalButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
