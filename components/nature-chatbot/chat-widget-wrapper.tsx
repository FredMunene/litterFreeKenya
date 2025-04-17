"use client"

import dynamic from "next/dynamic"

// Dynamically import the ChatWidget component with no SSR
const ChatWidget = dynamic(() => import("./chat-widget").then((mod) => mod.ChatWidget), {
  ssr: false,
})

export function ChatWidgetWrapper() {
  return <ChatWidget />
}
