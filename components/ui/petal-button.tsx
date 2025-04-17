"use client"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { PetalBurst, type PetalType } from "@/components/ui/petal-burst"

export interface PetalButtonProps extends ButtonProps {
  petalType?: PetalType
  petalColor?: "green" | "pink" | "white"
  petalIntensity?: "low" | "medium" | "high"
}

const PetalButton = forwardRef<HTMLButtonElement, PetalButtonProps>(
  ({ children, petalType = "rose", petalColor = "pink", petalIntensity = "low", ...props }, ref) => {
    return (
      <PetalBurst type={petalType} color={petalColor} intensity={petalIntensity}>
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </PetalBurst>
    )
  },
)

PetalButton.displayName = "PetalButton"

export { PetalButton }
