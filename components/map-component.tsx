"use client"

import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Custom marker icon
const createTreeIcon = () => {
  return new L.Icon({
    iconUrl: "/images/tree-marker.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

interface LocationMarkerProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void
  selectedLocation: { lat: number; lng: number } | null
}

function LocationMarker({ onLocationSelect, selectedLocation }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      onLocationSelect(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  const treeIcon = useRef<L.Icon | null>(null)

  useEffect(() => {
    // Initialize the icon on the client side
    treeIcon.current = createTreeIcon()
  }, [])

  return selectedLocation && treeIcon.current ? <Marker position={selectedLocation} icon={treeIcon.current} /> : null
}

interface MapComponentProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void
  selectedLocation: { lat: number; lng: number } | null
}

export default function MapComponent({ onLocationSelect, selectedLocation }: MapComponentProps) {
  // Default center on Kenya
  const defaultCenter = { lat: 0.0236, lng: 37.9062 }
  const defaultZoom = 6

  // Fix Leaflet default icon issue
  useEffect(() => {
    // Make sure this only runs on the client
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })
  }, [])

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onLocationSelect={onLocationSelect} selectedLocation={selectedLocation} />
    </MapContainer>
  )
}
