import { Input } from "@/components/ui/input"
import { PetalButton } from "@/components/ui/petal-button"

export default function CallToAction() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-forest-500 to-forest-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-elegant text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
          <p className="text-lg text-forest-100 mb-8">
            Together, we can make a difference. Join our community of environmental advocates and help us create a
            sustainable future for generations to come.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="heading-elegant text-xl font-bold mb-4">Volunteer With Us</h3>
              <p className="text-forest-100 mb-4">
                Contribute your time and skills to our conservation projects and community initiatives.
              </p>
              <PetalButton
                className="w-full bg-white text-forest-500 hover:bg-softpink-100"
                petalType="tulip"
                petalColor="white"
                petalIntensity="medium"
              >
                Become a Volunteer
              </PetalButton>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="heading-elegant text-xl font-bold mb-4">Support Our Work</h3>
              <p className="text-forest-100 mb-4">
                Your donation helps fund our conservation projects and educational programs.
              </p>
              <PetalButton
                className="w-full bg-white text-forest-500 hover:bg-softpink-100"
                petalType="orchid"
                petalColor="pink"
                petalIntensity="medium"
              >
                Donate Now
              </PetalButton>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="heading-elegant text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-forest-100 mb-4">
              Subscribe to our newsletter to receive updates on our projects and upcoming events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/20 border-0 text-white placeholder:text-forest-200 focus-visible:ring-softpink-200"
                required
              />
              <PetalButton
                className="bg-white text-forest-500 hover:bg-softpink-100 whitespace-nowrap"
                petalType="daisy"
                petalColor="white"
                petalIntensity="low"
              >
                Subscribe
              </PetalButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
