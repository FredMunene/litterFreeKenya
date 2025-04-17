import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-softpink-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4">Our Mission</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            LitterFreeKenya is committed to preserving natural habitats, protecting endangered species, and promoting
            sustainable practices through education and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-softpink-100 transition-all hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gifs/ecosystem-restoration.gif"
                alt="Ecosystem Restoration"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-3 text-center">
              Ecosystem Restoration
            </h3>
            <p className="text-black">
              We work to restore damaged ecosystems through reforestation, wetland rehabilitation, and sustainable land
              management practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-green-100 transition-all hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gifs/wildlife-protection.gif"
                alt="Wildlife Protection"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-3 text-center">Wildlife Protection</h3>
            <p className="text-black">
              Our conservation efforts focus on protecting endangered species and preserving biodiversity in critical
              habitats.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-softpink-100 transition-all hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-lg overflow-hidden">
              <Image
                src="/gifs/community-engagement.gif"
                alt="Community Engagement"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="heading-elegant text-xl font-bold text-forest-500 mb-3 text-center">Community Engagement</h3>
            <p className="text-black">
              We empower local communities through education, training, and participatory conservation programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
