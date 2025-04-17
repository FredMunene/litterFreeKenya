"use client"
import dynamic from "next/dynamic"

// Define the props interface outside the dynamic import
interface TreeMapProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void
  selectedLocation: { lat: number; lng: number } | null
}

// Create a placeholder component to show while loading
const MapPlaceholder = () => (
  <div className="w-full h-[400px] bg-forest-50 rounded-lg flex items-center justify-center">
    <div className="animate-spin h-8 w-8 border-4 border-forest-500 rounded-full border-t-transparent"></div>
    <span className="ml-2 text-forest-500">Loading map...</span>
  </div>
)

// This is a wrapper component that will dynamically import the actual map
const TreeMap = ({ onLocationSelect, selectedLocation }: TreeMapProps) => {
  // Use dynamic import with no SSR to load the actual map component
  const MapWithNoSSR = dynamic(() => import("./map-component"), {
    ssr: false,
    loading: MapPlaceholder,
  })

  return <MapWithNoSSR onLocationSelect={onLocationSelect} selectedLocation={selectedLocation} />
}

export default TreeMap
