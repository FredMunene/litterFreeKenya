import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { PetalButton } from "@/components/ui/petal-button"
import { TreesIcon as Tree, Trash2, Users, Droplets, BookOpen } from "lucide-react"

export const metadata = {
  title: "All Activities | LitterFreeKenya",
  description: "Explore all the ways you can get involved with LitterFreeKenya's environmental conservation efforts.",
}

export default function AllActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink-50 via-white to-green-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4 text-center">
            All Activities
          </h1>
          <p className="text-lg text-center mb-12">
            Discover all the ways you can contribute to environmental conservation in Kenya. From planting trees to
            organizing clean-ups, every action makes a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plant a Tree */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Plant a Tree" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Plant a Tree</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <Tree className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">From $10 per tree</span>
                    <span className="block text-xs text-gray-500">Includes 1 year of maintenance</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Contribute to reforestation efforts by planting trees in areas that need it most. Choose your tree
                  species and location.
                </p>
                <Link href="/plant-a-tree">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="rose"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Plant Now
                  </PetalButton>
                </Link>
              </div>
            </div>

            {/* Organize a Clean-up */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Organize a Clean-up"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Organize a Clean-up</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <Trash2 className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">Free to organize</span>
                    <span className="block text-xs text-gray-500">We provide supplies and support</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Lead a community clean-up event in your neighborhood. We'll provide resources, supplies, and
                  volunteers.
                </p>
                <Link href="/organize-cleanup">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="daisy"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Get Started
                  </PetalButton>
                </Link>
              </div>
            </div>

            {/* Check Tree Status */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Check Tree Status"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Check Tree Status</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <Tree className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">Track your impact</span>
                    <span className="block text-xs text-gray-500">Monitor growth and health</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Monitor the growth and health of trees you've planted. Get updates with photos and impact data.
                </p>
                <Link href="/my-trees">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="tulip"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    View Trees
                  </PetalButton>
                </Link>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Volunteer" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Volunteer</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">Join our team</span>
                    <span className="block text-xs text-gray-500">Flexible opportunities</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Contribute your time and skills to our conservation projects. We have opportunities for all skill
                  levels.
                </p>
                <Link href="/volunteer">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="orchid"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Join Us
                  </PetalButton>
                </Link>
              </div>
            </div>

            {/* Water Conservation */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Water Conservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Water Conservation</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <Droplets className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">Protect water sources</span>
                    <span className="block text-xs text-gray-500">Community-based projects</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Participate in projects that protect watersheds, restore wetlands, and ensure clean water access.
                </p>
                <Link href="/water-conservation">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="lily"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Learn More
                  </PetalButton>
                </Link>
              </div>
            </div>

            {/* Environmental Education */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Environmental Education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="heading-elegant text-2xl font-bold text-white p-4">Environmental Education</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center mr-3">
                    <BookOpen className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-forest-600">Spread awareness</span>
                    <span className="block text-xs text-gray-500">Schools and communities</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Help educate communities about environmental conservation through workshops, school programs, and
                  events.
                </p>
                <Link href="/education">
                  <PetalButton
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                    petalType="daisy"
                    petalColor="green"
                    petalIntensity="low"
                  >
                    Get Involved
                  </PetalButton>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="heading-elegant text-2xl font-bold text-forest-500 mb-4 text-center">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Have an idea for an environmental initiative not listed here? We're always open to new ideas and
              partnerships.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <PetalButton
                  className="bg-forest-500 hover:bg-forest-600 text-white px-8"
                  petalType="rose"
                  petalColor="green"
                  petalIntensity="medium"
                >
                  Contact Us
                </PetalButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
