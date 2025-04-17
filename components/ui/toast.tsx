"use client"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 w-full max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "bg-white border rounded-lg shadow-lg p-4 flex items-start justify-between",
            toast.variant === "destructive" ? "border-red-500" : "border-forest-200",
          )}
        >
          <div>
            <h3 className={cn("font-medium", toast.variant === "destructive" ? "text-red-600" : "text-forest-700")}>
              {toast.title}
            </h3>
            {toast.description && <p className="text-sm text-gray-500 mt-1">{toast.description}</p>}
          </div>
          <button onClick={() => dismiss(toast.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
