import PlantTreeMap from "@/components/plant-tree-map"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toast"

export const metadata = {
  title: "Plant a Tree | LitterFreeKenya",
  description: "Choose a location to plant your tree and contribute to reforestation efforts in Kenya.",
}

export default function PlantATreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink-50 via-white to-green-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4 text-center">
            Plant a Tree
          </h1>
          <p className="text-lg text-center mb-2">
            Select a location on the map where you'd like to plant your tree. Your contribution will help us restore
            Kenya's forests and combat climate change.
          </p>
          <p className="text-center text-forest-600 font-medium mb-8">
            Each tree costs $10 to plant and maintain for a year, with discounts for larger quantities.
          </p>

          <PlantTreeMap />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
