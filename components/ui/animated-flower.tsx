"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { randomRange } from "@/lib/animation-utils"

interface AnimatedFlowerProps {
  imageSrc: string
  index: number
  totalCount: number
  duration?: number
  delay?: number
  size?: number
}

export function AnimatedFlower({
  imageSrc,
  index,
  totalCount,
  duration = 10,
  delay: initialDelay,
  size = 24,
}: AnimatedFlowerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [delay, setDelay] = useState(initialDelay || index * 0.5)

  useEffect(() => {
    // Calculate a random position within the container
    const x = `${randomRange(5, 95)}%`
    const y = `${randomRange(5, 95)}%`
    setPosition({ x, y })
  }, [index])

  return (
    <motion.div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 1, 0.8],
        opacity: [0, 0.7, 0.5, 0],
        rotate: [0, randomRange(-15, 15)],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: randomRange(5, 15),
      }}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt="Flower"
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </motion.div>
  )
}
