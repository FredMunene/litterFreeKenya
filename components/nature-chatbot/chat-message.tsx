import type { NaturePersona } from "./types"
import { Leaf, TreesIcon as Tree, Droplets, Waves } from "lucide-react"

interface ChatMessageProps {
  message: string
  isUser: boolean
  persona: NaturePersona
}

export function ChatMessage({ message, isUser, persona }: ChatMessageProps) {
  return (
    <div className={`flex items-start mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mr-2 rounded-full w-8 h-8 flex items-center justify-center bg-forest-100">
          {getPersonaIcon(persona)}
        </div>
      )}
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          isUser ? "bg-forest-500 text-white rounded-tr-none" : "bg-white border border-gray-200 rounded-tl-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message}</p>
      </div>
      {isUser && (
        <div className="ml-2 rounded-full w-8 h-8 flex items-center justify-center bg-forest-500 text-white">
          <span className="text-xs font-medium">You</span>
        </div>
      )}
    </div>
  )
}

function getPersonaIcon(persona: NaturePersona) {
  switch (persona) {
    case "lily":
      return <Leaf className="h-4 w-4 text-forest-500" />
    case "savanna-tree":
      return <Tree className="h-4 w-4 text-forest-500" />
    case "water-plant":
      return <Droplets className="h-4 w-4 text-forest-500" />
    case "mangrove":
      return <Waves className="h-4 w-4 text-forest-500" />
    default:
      return <Leaf className="h-4 w-4 text-forest-500" />
  }
}
