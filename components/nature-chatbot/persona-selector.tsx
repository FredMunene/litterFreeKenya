"use client"

import type React from "react"

import { Leaf, TreesIcon as Tree, Droplets, Waves } from "lucide-react"
import type { NaturePersona } from "./types"

interface PersonaSelectorProps {
  selectedPersona: NaturePersona
  onPersonaChange: (persona: NaturePersona) => void
}

export function PersonaSelector({ selectedPersona, onPersonaChange }: PersonaSelectorProps) {
  const personas: { id: NaturePersona; name: string; icon: React.ReactNode }[] = [
    {
      id: "lily",
      name: "Lily",
      icon: <Leaf className="h-4 w-4" />,
    },
    {
      id: "savanna-tree",
      name: "Acacia Tree",
      icon: <Tree className="h-4 w-4" />,
    },
    {
      id: "water-plant",
      name: "Water Lily",
      icon: <Droplets className="h-4 w-4" />,
    },
    {
      id: "mangrove",
      name: "Mangrove",
      icon: <Waves className="h-4 w-4" />,
    },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {personas.map((persona) => (
        <button
          key={persona.id}
          onClick={() => onPersonaChange(persona.id)}
          className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
            selectedPersona === persona.id ? "bg-forest-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-colors`}
        >
          <span className="mr-1.5">{persona.icon}</span>
          {persona.name}
        </button>
      ))}
    </div>
  )
}
