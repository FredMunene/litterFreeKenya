"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TreeAnimation() {
  const [animationStage, setAnimationStage] = useState(0)
  const [fallingFlowers, setFallingFlowers] = useState<{ id: number; x: number; delay: number }[]>([])

  useEffect(() => {
    // Start the animation sequence
    const timeline = [
      { stage: 1, delay: 1000 }, // Seedling
      { stage: 2, delay: 2000 }, // Small tree
      { stage: 3, delay: 2000 }, // Full tree
      { stage: 4, delay: 1500 }, // Flowers appear
      { stage: 5, delay: 2000 }, // Flowers fall
    ]

    const timeoutIds: NodeJS.Timeout[] = []

    let cumulativeDelay = 0
    timeline.forEach(({ stage, delay }) => {
      cumulativeDelay += delay
      const timeoutId = setTimeout(() => {
        setAnimationStage(stage)

        // When reaching the falling flowers stage, create the falling flowers
        if (stage === 5) {
          const flowers = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 200 - 100, // Random x position
            delay: Math.random() * 1.5, // Random delay
          }))
          setFallingFlowers(flowers)
        }
      }, cumulativeDelay)

      timeoutIds.push(timeoutId)
    })

    // Cleanup function
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id))
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Ground/Soil */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-800 to-amber-700 rounded-t-full" />

      {/* Seedling - Stage 1 */}
      {animationStage >= 1 && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1 h-10 bg-green-700 rounded-t-full" />
          <div className="w-8 h-6 bg-green-500 rounded-full -mt-2 -ml-3.5" />
        </motion.div>
      )}

      {/* Small Tree - Stage 2 */}
      {animationStage >= 2 && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-3 h-32 bg-amber-800 rounded-t-full" />
          <div className="w-32 h-24 bg-green-600 rounded-full -mt-12 -ml-14" />
        </motion.div>
      )}

      {/* Full Tree - Stage 3 */}
      {animationStage >= 3 && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-6 h-64 bg-amber-800 rounded-t-full" />
          <div className="w-64 h-48 bg-green-600 rounded-full -mt-20 -ml-29" />
          <div className="w-80 h-40 bg-green-700 rounded-full -mt-32 -ml-37" />
          <div className="w-56 h-32 bg-green-600 rounded-full -mt-64 -ml-25" />
        </motion.div>
      )}

      {/* Flowers on Tree - Stage 4 */}
      {animationStage >= 4 && (
        <>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`flower-${i}`}
              className="absolute w-4 h-4 rounded-full bg-pink-300"
              style={{
                bottom: 100 + Math.random() * 120,
                left: `calc(50% + ${-40 + Math.random() * 80}px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </>
      )}

      {/* Falling Flowers - Stage 5 */}
      {animationStage >= 5 &&
        fallingFlowers.map((flower) => (
          <motion.div
            key={`falling-flower-${flower.id}`}
            className="absolute w-4 h-4 rounded-full bg-pink-300"
            style={{
              top: Math.random() * 100 + 50,
              left: `calc(50% + ${flower.x}px)`,
            }}
            initial={{ opacity: 1, y: 0 }}
            animate={{
              y: 400,
              x: flower.x + (Math.random() * 100 - 50),
              opacity: [1, 1, 0.8, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: flower.delay,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  )
}
