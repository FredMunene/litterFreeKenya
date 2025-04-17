import Header from "@/components/header"
import Footer from "@/components/footer"
import { PetalButton } from "@/components/ui/petal-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Users, Clock, Trash2 } from "lucide-react"

export const metadata = {
  title: "Organize a Clean-up | LitterFreeKenya",
  description: "Lead a community clean-up event in your neighborhood with our support and resources.",
}

export default function OrganizeCleanupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink-50 via-white to-green-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4 text-center">
            Organize a Community Clean-up
          </h1>
          <p className="text-lg text-center mb-8">
            Lead the change in your community by organizing a clean-up event. We'll provide resources, connect you with
            volunteers, and help make your event a success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-2">Plan Your Event</h3>
              <p className="text-gray-700">
                Choose a date, time, and location for your clean-up. We recommend weekends for maximum participation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-2">Recruit Volunteers</h3>
              <p className="text-gray-700">
                We'll help you find volunteers in your area who are passionate about keeping Kenya clean.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-2">Get Supplies</h3>
              <p className="text-gray-700">
                We provide gloves, bags, and other necessary supplies to make your clean-up safe and effective.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="heading-elegant text-2xl font-bold text-forest-500 mb-6">Register Your Clean-up Event</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input id="eventName" placeholder="Give your clean-up a name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <div className="relative">
                    <Input id="date" type="date" required />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Event Time</Label>
                  <div className="relative">
                    <Input id="time" type="time" required />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location">Event Location</Label>
                  <div className="relative">
                    <Input id="location" placeholder="Enter the clean-up location" required />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your clean-up event and what you hope to accomplish"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="volunteers">Estimated Number of Volunteers</Label>
                  <Input
                    id="volunteers"
                    type="number"
                    min="1"
                    placeholder="How many volunteers do you expect?"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <PetalButton
                  type="submit"
                  className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-3"
                  petalType="daisy"
                  petalColor="green"
                  petalIntensity="medium"
                >
                  Register Clean-up Event
                </PetalButton>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
