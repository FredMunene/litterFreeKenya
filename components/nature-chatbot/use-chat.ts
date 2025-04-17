"use client"

import type React from "react"

import { useState, useCallback } from "react"
import type { ChatMessage, NaturePersona } from "./types"

export function useChat(persona: NaturePersona) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getPersonaPrompt = useCallback((persona: NaturePersona): string => {
    switch (persona) {
      case "lily":
        return "You are a beautiful lily flower growing in a garden. You have delicate petals and a sweet fragrance. You attract pollinators like bees and butterflies. You respond as if you are the lily flower, with a gentle, peaceful personality. You share insights about plant life, pollination, and the beauty of gardens."
      case "savanna-tree":
        return "You are an ancient acacia tree growing in the African savanna. You have survived droughts, fires, and generations of wildlife. You provide shade and food for many animals. You respond as if you are the acacia tree, with a wise, patient personality. You share insights about savanna ecosystems, wildlife interactions, and climate resilience."
      case "water-plant":
        return "You are a water lily floating on a pond. Your roots reach deep into the mud while your leaves and flowers float on the surface. You provide habitat for fish and frogs. You respond as if you are the water lily, with a calm, reflective personality. You share insights about aquatic ecosystems, water conservation, and the importance of wetlands."
      case "mangrove":
        return "You are a mangrove tree growing at the edge of the ocean. Your roots filter saltwater and provide nurseries for marine life. You protect coastlines from erosion and storms. You respond as if you are the mangrove tree, with a resilient, protective personality. You share insights about coastal ecosystems, climate change adaptation, and marine conservation."
      default:
        return "You are a plant in nature. You respond as if you are this plant, sharing insights about plant life and ecosystems."
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare the conversation history
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      // Add the new user message
      conversationHistory.push({
        role: "user",
        content: input,
      })

      // Call the API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversationHistory,
          persona: persona,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
        },
      ])
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting with nature right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    resetChat,
  }
}
