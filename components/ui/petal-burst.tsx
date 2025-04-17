"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SvgPetal } from "@/components/ui/svg-petal" // Add this import

export type PetalType = "rose" | "daisy" | "lily" | "tulip" | "orchid"

export interface PetalBurstProps {
  type: PetalType
  color?: "green" | "pink" | "white"
  intensity?: "low" | "medium" | "high"
  children: React.ReactNode
}

interface Petal {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  delay: number
  flip: boolean
}

const petalConfigs = {
  rose: {
    count: 6,
    baseSize: 0.8,
  },
  daisy: {
    count: 8,
    baseSize: 0.7,
  },
  lily: {
    count: 5,
    baseSize: 0.9,
  },
  tulip: {
    count: 7,
    baseSize: 0.8,
  },
  orchid: {
    count: 6,
    baseSize: 0.6,
  },
}

const colorVariants = {
  green: {
    primary: "#40916C",
    secondary: "#74C69D",
    opacity: 0.7,
  },
  pink: {
    primary: "#F766B8",
    secondary: "#FA8BC9",
    opacity: 0.7,
  },
  white: {
    primary: "#FFFFFF",
    secondary: "#F0F0F0",
    opacity: 0.8,
  },
}

const intensitySettings = {
  low: {
    distance: 40,
    duration: 0.8,
  },
  medium: {
    distance: 60,
    duration: 1.2,
  },
  high: {
    distance: 80,
    duration: 1.5,
  },
}

export function PetalBurst({ type = "rose", color = "pink", intensity = "low", children }: PetalBurstProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [petals, setPetals] = useState<Petal[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const petalConfig = petalConfigs[type]
  const colorVariant = colorVariants[color]
  const intensitySetting = intensitySettings[intensity]

  const generatePetals = () => {
    const newPetals: Petal[] = []
    const count = petalConfig.count

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 360
      const delay = Math.random() * 0.2

      newPetals.push({
        id: i,
        x: 0,
        y: 0,
        rotation: Math.random() * 360,
        scale: petalConfig.baseSize + Math.random() * 0.4,
        delay,
        flip: Math.random() > 0.5,
      })
    }

    setPetals(newPetals)
  }

  useEffect(() => {
    generatePetals()
  }, [type])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), intensitySetting.duration * 1000)
  }

  return (
    <div
      className="relative inline-block"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}

      <AnimatePresence>
        {(isHovering || isClicked) && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            {petals.map((petal) => {
              const angle = Math.random() * 360
              const distance = intensitySetting.distance
              const targetX = Math.cos((angle * Math.PI) / 180) * distance
              const targetY = Math.sin((angle * Math.PI) / 180) * distance
              const petalColor = petal.id % 2 === 0 ? colorVariant.primary : colorVariant.secondary

              return (
                <motion.div
                  key={petal.id}
                  className="absolute"
                  initial={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 0,
                    opacity: colorVariant.opacity,
                  }}
                  animate={{
                    x: targetX,
                    y: targetY,
                    rotate: petal.rotation,
                    scale: petal.scale,
                    opacity: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: intensitySetting.duration,
                    delay: petal.delay,
                    ease: "easeOut",
                  }}
                  style={{
                    transform: petal.flip ? "scaleX(-1)" : "none",
                  }}
                >
                  <SvgPetal type={type} color={petalColor} />
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
