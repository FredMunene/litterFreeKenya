"use client"

import { AnimatedFlower } from "@/components/ui/animated-flower"

interface FlowerFieldProps {
  flowerImages: string[]
  count?: number
  className?: string
}

export function FlowerField({ flowerImages, count = 15, className = "" }: FlowerFieldProps) {
  // If no images are provided, use a default placeholder
  const images = flowerImages.length > 0 ? flowerImages : ["/placeholder.svg"]

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        // Select a random image from the provided array
        const randomImageIndex = Math.floor(Math.random() * flowerImages.length)
        const imageSrc = flowerImages[randomImageIndex]

        return (
          <AnimatedFlower
            key={`flower-${i}`}
            imageSrc={imageSrc}
            index={i}
            totalCount={count}
            size={Math.floor(Math.random() * 10) + 15} // Random size between 15-25px
          />
        )
      })}
    </div>
  )
}
