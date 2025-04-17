export type NaturePersona = "lily" | "savanna-tree" | "water-plant" | "mangrove"

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
}
