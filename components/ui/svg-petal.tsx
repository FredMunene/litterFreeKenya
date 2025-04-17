import Image from "next/image"
import { cn } from "@/lib/utils"

export type PetalType = "rose" | "daisy" | "lily" | "tulip" | "orchid"

interface SvgPetalProps {
  type: PetalType
  className?: string
  color?: string
}

export function SvgPetal({ type, className, color = "#FFFFFF" }: SvgPetalProps) {
  // Map of petal types to image paths
  const petalImages = {
    rose: "/images/petals/rose-petal.png",
    daisy: "/images/petals/daisy-petal.png",
    lily: "/images/petals/lily-petal.png",
    tulip: "/images/petals/tulip-petal.png",
    orchid: "/images/petals/orchid-petal.png",
  }

  return (
    <div
      className={cn("relative w-6 h-6", className)}
      style={{
        filter: `brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)`,
        // This filter will be applied to make the image match the color
        // You may need to adjust this based on your image colors
      }}
    >
      <Image
        src={petalImages[type] || "/placeholder.svg"}
        alt={`${type} petal`}
        width={24}
        height={24}
        className="w-full h-full object-contain"
        style={{
          filter: `drop-shadow(0 0 0 ${color})`,
        }}
      />
    </div>
  )
}
