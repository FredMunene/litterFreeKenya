"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PetalButton } from "@/components/ui/petal-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2, MapPin, TreesIcon as Tree, CreditCard, DollarSign, MinusCircle, PlusCircle } from "lucide-react"
import SimpleMap from "@/components/simple-map"
import PricingPackages from "@/components/pricing-packages"

// Tree species options
const treeSpecies = [
  { id: "acacia", name: "Acacia" },
  { id: "baobab", name: "Baobab" },
  { id: "cedar", name: "Cedar" },
  { id: "eucalyptus", name: "Eucalyptus" },
  { id: "fig", name: "Fig Tree" },
  { id: "mango", name: "Mango Tree" },
  { id: "neem", name: "Neem Tree" },
  { id: "olive", name: "Olive Tree" },
  { id: "palm", name: "Palm Tree" },
]

// Regions in Kenya
const regions = [
  { id: "nairobi", name: "Nairobi Region" },
  { id: "central", name: "Central Kenya" },
  { id: "coast", name: "Coastal Region" },
  { id: "eastern", name: "Eastern Kenya" },
  { id: "nyanza", name: "Nyanza" },
  { id: "rift", name: "Rift Valley" },
  { id: "western", name: "Western Kenya" },
  { id: "north", name: "Northern Kenya" },
]

export default function PlantTreeMap() {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [currentStep, setCurrentStep] = useState<"location" | "details" | "pricing" | "payment" | "confirmation">(
    "location",
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    treeSpecies: "",
    region: "",
    message: "",
    dedicateTo: "",
  })
  const [treeCount, setTreeCount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(10)
  const { toast } = useToast()

  const handleLocationSelect = (location: { lat: number; lng: number }) => {
    setSelectedLocation(location)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePackageSelect = (count: number, price: number) => {
    setTreeCount(count)
    setTotalPrice(price)
    setCurrentStep("payment")
  }

  const handleCustomTreeCount = (count: number) => {
    const newCount = Math.max(1, count)
    setTreeCount(newCount)
    // Apply bulk discount: $10 per tree, but $5 per tree for trees beyond 20
    let price = 0
    if (newCount <= 20) {
      price = newCount * 10
    } else {
      price = 200 + (newCount - 20) * 5
    }
    setTotalPrice(price)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedLocation) {
      toast({
        title: "Location required",
        description: "Please select a location on the map for your tree.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setCurrentStep("confirmation")
  }

  const resetForm = () => {
    setSelectedLocation(null)
    setFormData({
      name: "",
      email: "",
      treeSpecies: "",
      region: "",
      message: "",
      dedicateTo: "",
    })
    setTreeCount(1)
    setTotalPrice(10)
    setCurrentStep("location")
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Tabs
        defaultValue="location"
        value={currentStep}
        onValueChange={(value) => setCurrentStep(value as any)}
        className="w-full"
      >
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="location" disabled={currentStep !== "location"}>
            1. Location
          </TabsTrigger>
          <TabsTrigger value="details" disabled={currentStep !== "details" && currentStep !== "location"}>
            2. Details
          </TabsTrigger>
          <TabsTrigger value="pricing" disabled={currentStep !== "pricing" && currentStep !== "details"}>
            3. Pricing
          </TabsTrigger>
          <TabsTrigger value="payment" disabled={currentStep !== "payment" && currentStep !== "pricing"}>
            4. Payment
          </TabsTrigger>
          <TabsTrigger value="confirmation" disabled={currentStep !== "confirmation"}>
            5. Confirmation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="location" className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-serif font-bold text-forest-600 mb-2">Select Planting Location</h2>
            <p className="text-gray-600 mb-4">Click on the map to select where you'd like your tree to be planted.</p>

            <div className="rounded-lg overflow-hidden border border-forest-100 mb-4">
              <SimpleMap onLocationSelect={handleLocationSelect} selectedLocation={selectedLocation} />
            </div>

            {selectedLocation && (
              <div className="bg-forest-50 p-4 rounded-lg flex items-center">
                <MapPin className="h-5 w-5 text-forest-500 mr-2" />
                <span className="text-forest-700">
                  Selected location: {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <PetalButton
              onClick={() => setCurrentStep("details")}
              disabled={!selectedLocation}
              className="bg-forest-500 hover:bg-forest-600 text-white"
              petalType="lily"
              petalColor="green"
            >
              Continue to Tree Details
            </PetalButton>
          </div>
        </TabsContent>

        <TabsContent value="details" className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setCurrentStep("pricing")
            }}
          >
            <h2 className="text-xl font-serif font-bold text-forest-600 mb-4">Tree Planting Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="treeSpecies">Tree Species</Label>
                <Select
                  value={formData.treeSpecies}
                  onValueChange={(value) => handleSelectChange("treeSpecies", value)}
                  required
                >
                  <SelectTrigger id="treeSpecies">
                    <SelectValue placeholder="Select tree species" />
                  </SelectTrigger>
                  <SelectContent>
                    {treeSpecies.map((species) => (
                      <SelectItem key={species.id} value={species.id}>
                        {species.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Select value={formData.region} onValueChange={(value) => handleSelectChange("region", value)} required>
                  <SelectTrigger id="region">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region.id} value={region.id}>
                        {region.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="dedicateTo">Dedicate This Tree To (Optional)</Label>
                <Input
                  id="dedicateTo"
                  name="dedicateTo"
                  value={formData.dedicateTo}
                  onChange={handleInputChange}
                  placeholder="Enter name of person or cause"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share why you're planting this tree"
                  rows={3}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep("location")}
                className="border-forest-500 text-forest-500"
              >
                Back to Map
              </Button>

              <PetalButton
                type="submit"
                className="bg-forest-500 hover:bg-forest-600 text-white"
                petalType="rose"
                petalColor="green"
              >
                Continue to Pricing
              </PetalButton>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="pricing" className="p-6">
          <PricingPackages onSelectPackage={handlePackageSelect} />

          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep("details")}
              className="border-forest-500 text-forest-500"
            >
              Back to Details
            </Button>

            <PetalButton
              onClick={() => setCurrentStep("payment")}
              className="bg-forest-500 hover:bg-forest-600 text-white"
              petalType="rose"
              petalColor="green"
            >
              Continue with Custom Amount
            </PetalButton>
          </div>
        </TabsContent>

        <TabsContent value="payment" className="p-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-serif font-bold text-forest-600 mb-4">Payment Details</h2>

            <div className="bg-forest-50 p-6 rounded-lg mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-forest-700">Your Tree Planting Order</h3>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleCustomTreeCount(treeCount - 1)}
                    className="text-forest-600 hover:text-forest-800 transition-colors"
                    disabled={treeCount <= 1}
                  >
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <span className="font-bold text-lg">{treeCount}</span>
                  <button
                    type="button"
                    onClick={() => handleCustomTreeCount(treeCount + 1)}
                    className="text-forest-600 hover:text-forest-800 transition-colors"
                  >
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trees to plant:</span>
                  <span className="font-medium">{treeCount} trees</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maintenance period:</span>
                  <span className="font-medium">1 year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per tree:</span>
                  <span className="font-medium">${(totalPrice / treeCount).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold text-forest-700">Total:</span>
                  <span className="font-bold text-forest-700">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  Your contribution helps us plant and maintain these trees for one year, including regular watering,
                  protection, and monitoring.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Smith" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative mt-1">
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required className="mt-1" />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveCard"
                    className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-gray-300 rounded"
                  />
                  <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                    Save this card for future donations
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep("pricing")}
                  className="border-forest-500 text-forest-500"
                >
                  Back to Pricing
                </Button>

                <PetalButton
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-forest-500 hover:bg-forest-600 text-white"
                  petalType="rose"
                  petalColor="green"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <DollarSign className="mr-2 h-4 w-4" />
                      Pay ${totalPrice.toFixed(2)}
                    </>
                  )}
                </PetalButton>
              </div>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="confirmation" className="p-6">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tree className="h-10 w-10 text-forest-500" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-forest-600 mb-4">Thank You for Your Contribution!</h2>

            <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
              Your payment of <span className="font-medium">${totalPrice.toFixed(2)}</span> has been processed
              successfully. We'll send updates about your {treeCount} {treeCount === 1 ? "tree" : "trees"} to{" "}
              <span className="font-medium">{formData.email}</span>.
            </p>

            <div className="bg-forest-50 p-6 rounded-lg max-w-md mx-auto mb-8">
              <h3 className="font-medium text-forest-700 mb-2">Tree Planting Details:</h3>
              <ul className="text-left space-y-2">
                <li className="flex">
                  <span className="font-medium w-32">Species:</span>
                  <span>{treeSpecies.find((s) => s.id === formData.treeSpecies)?.name || formData.treeSpecies}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Region:</span>
                  <span>{regions.find((r) => r.id === formData.region)?.name || formData.region}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Quantity:</span>
                  <span>
                    {treeCount} {treeCount === 1 ? "tree" : "trees"}
                  </span>
                </li>
                <li className="flex">
                  <span className="font-medium w-32">Coordinates:</span>
                  <span>
                    {selectedLocation?.lat.toFixed(6)}, {selectedLocation?.lng.toFixed(6)}
                  </span>
                </li>
                {formData.dedicateTo && (
                  <li className="flex">
                    <span className="font-medium w-32">Dedicated to:</span>
                    <span>{formData.dedicateTo}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PetalButton
                onClick={resetForm}
                className="bg-forest-500 hover:bg-forest-600 text-white"
                petalType="daisy"
                petalColor="green"
              >
                Plant More Trees
              </PetalButton>

              <Button variant="outline" className="border-forest-500 text-forest-500">
                Download Certificate
              </Button>

              <Button variant="outline" className="border-forest-500 text-forest-500">
                Share on Social Media
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
