"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

interface SimpleMapProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void
  selectedLocation: { lat: number; lng: number } | null
}

// Kenya's approximate bounding box
const KENYA_BOUNDS = {
  north: 5.0, // max latitude
  south: -4.8, // min latitude
  east: 41.9, // max longitude
  west: 33.9, // min longitude
}

export default function SimpleMap({ onLocationSelect, selectedLocation }: SimpleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null)
  const [imageError, setImageError] = useState(false)

  // Convert pixel coordinates to geographic coordinates
  const pixelToGeo = (x: number, y: number, width: number, height: number) => {
    const lat = KENYA_BOUNDS.north - (y / height) * (KENYA_BOUNDS.north - KENYA_BOUNDS.south)
    const lng = KENYA_BOUNDS.west + (x / width) * (KENYA_BOUNDS.east - KENYA_BOUNDS.west)
    return { lat, lng }
  }

  // Convert geographic coordinates to pixel coordinates
  const geoToPixel = (lat: number, lng: number, width: number, height: number) => {
    const x = ((lng - KENYA_BOUNDS.west) / (KENYA_BOUNDS.east - KENYA_BOUNDS.west)) * width
    const y = ((KENYA_BOUNDS.north - lat) / (KENYA_BOUNDS.north - KENYA_BOUNDS.south)) * height
    return { x, y }
  }

  // Handle map click
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapRef.current) return

    const rect = mapRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Update marker position
    setMarkerPosition({ x, y })

    // Convert to geographic coordinates and call the callback
    const geoCoords = pixelToGeo(x, y, rect.width, rect.height)
    onLocationSelect(geoCoords)
  }

  // Update marker position when selectedLocation changes
  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect()
      const pixelCoords = geoToPixel(selectedLocation.lat, selectedLocation.lng, rect.width, rect.height)
      setMarkerPosition(pixelCoords)
    }
  }, [selectedLocation])

  return (
    <div className="relative w-full h-[400px] bg-forest-50 rounded-lg overflow-hidden">
      <div ref={mapRef} className="relative w-full h-full cursor-crosshair" onClick={handleMapClick}>
        {/* Map of Kenya - with fallback to SVG if JPG fails */}
        {imageError ? (
          <Image src="/images/kenya-map.svg" alt="Map of Kenya" fill className="object-contain" priority />
        ) : (
          <Image
            src="/images/kenya-map.jpg"
            alt="Map of Kenya"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        )}

        {/* Selected location marker */}
        {markerPosition && (
          <div
            className="absolute z-10 transform -translate-x-1/2 -translate-y-full"
            style={{ left: `${markerPosition.x}px`, top: `${markerPosition.y}px` }}
          >
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-forest-600" />
              <div className="h-4 w-4 rounded-full bg-forest-500 -mt-1 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
