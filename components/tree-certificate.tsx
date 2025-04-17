import Image from "next/image"
import { format } from "date-fns"

interface TreeCertificateProps {
  name: string
  treeCount: number
  species: string
  dedicatedTo?: string
  date: Date
  location: { lat: number; lng: number }
  region: string
}

export default function TreeCertificate({
  name,
  treeCount,
  species,
  dedicatedTo,
  date,
  location,
  region,
}: TreeCertificateProps) {
  return (
    <div className="relative w-full aspect-[1.414/1] bg-white border-8 border-forest-100 rounded-lg overflow-hidden shadow-lg p-8 print:border-0 print:shadow-none">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src="/images/tree-pattern.svg" alt="Background pattern" fill className="object-cover" />
      </div>

      {/* Certificate content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full">
        <div className="text-center">
          <h2 className="text-forest-700 text-xl font-serif">LitterFreeKenya</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-600 mt-2 mb-4 font-serif">
            Tree Planting Certificate
          </h1>
          <div className="w-32 h-1 bg-forest-500 mx-auto mb-6"></div>
        </div>

        <div className="text-center max-w-md mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            This certifies that
            <span className="font-bold text-forest-700 block text-xl my-2">{name}</span>
            has contributed to the planting of
            <span className="font-bold text-forest-700 block text-xl my-2">
              {treeCount} {treeCount === 1 ? "Tree" : "Trees"}
            </span>
            {dedicatedTo && (
              <span className="block mt-2">
                Dedicated to: <span className="font-medium">{dedicatedTo}</span>
              </span>
            )}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-6">
            <div>
              <p className="font-medium">Species:</p>
              <p>{species}</p>
            </div>
            <div>
              <p className="font-medium">Region:</p>
              <p>{region}</p>
            </div>
            <div>
              <p className="font-medium">Coordinates:</p>
              <p>
                {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
              </p>
            </div>
            <div>
              <p className="font-medium">Date:</p>
              <p>{format(date, "MMMM d, yyyy")}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 bg-forest-100 rounded-full flex items-center justify-center">
              <Image src="/images/tree-marker.svg" alt="Tree icon" width={48} height={48} className="text-forest-500" />
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Certificate ID: LFK-{Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p>
          <p className="text-sm text-gray-500 mt-1">Verify at litterfreekenya.org/verify</p>
        </div>
      </div>
    </div>
  )
}
