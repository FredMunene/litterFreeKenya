// Utility to check if the device prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Utility to determine animation settings based on device performance
export function getAnimationSettings() {
  const isReducedMotion = prefersReducedMotion()

  if (isReducedMotion) {
    return {
      enabled: false,
    }
  }

  // Check if device is likely low-powered
  const isLowPowered =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (isLowPowered) {
    return {
      enabled: true,
      intensity: "low" as const,
      count: "minimal" as const,
    }
  }

  return {
    enabled: true,
    intensity: "medium" as const,
    count: "normal" as const,
  }
}

// Helper to get random value within a range
export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

// Helper to get random item from array
export function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Helper to create a delay function
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
