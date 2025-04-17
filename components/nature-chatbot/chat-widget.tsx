"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Minimize, Maximize, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "./chat-message"
import { PersonaSelector } from "./persona-selector"
import { useChat } from "./use-chat"
import type { NaturePersona } from "./types"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [selectedPersona, setSelectedPersona] = useState<NaturePersona>("lily")
  const { messages, input, handleInputChange, handleSubmit, isLoading, resetChat } = useChat(selectedPersona)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Reset chat when persona changes
  useEffect(() => {
    resetChat()
  }, [selectedPersona, resetChat])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handlePersonaChange = (persona: NaturePersona) => {
    setSelectedPersona(persona)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Widget */}
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 mb-4 border border-forest-100 w-full max-w-sm ${
            isMinimized ? "h-16" : "h-[500px]"
          }`}
        >
          {/* Chat Header */}
          <div className="bg-forest-500 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Chat with Nature</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="text-white hover:text-forest-100 transition-colors">
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="text-white hover:text-forest-100 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Persona Selector */}
              <div className="p-3 border-b border-gray-200">
                <PersonaSelector selectedPersona={selectedPersona} onPersonaChange={handlePersonaChange} />
              </div>

              {/* Chat Messages */}
              <div className="p-4 overflow-y-auto h-[340px] bg-gray-50">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-20">
                    <p>Start a conversation with {getPersonaName(selectedPersona)}!</p>
                    <p className="text-sm mt-2">Ask about its life, habitat, or how it contributes to the ecosystem.</p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      message={message.content}
                      isUser={message.role === "user"}
                      persona={selectedPersona}
                    />
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder={`Ask ${getPersonaName(selectedPersona)} something...`}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
                    {isLoading ? (
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg ${
          isOpen ? "bg-forest-600" : "bg-forest-500"
        } hover:bg-forest-600 transition-colors`}
      >
        <Leaf className="h-6 w-6" />
      </Button>
    </div>
  )
}

function getPersonaName(persona: NaturePersona): string {
  switch (persona) {
    case "lily":
      return "Lily"
    case "savanna-tree":
      return "Acacia Tree"
    case "water-plant":
      return "Water Lily"
    case "mangrove":
      return "Mangrove"
    default:
      return "Nature"
  }
}
