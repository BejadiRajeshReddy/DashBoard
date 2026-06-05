import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "positive" | "warning" | "info"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-ink text-canvas hover:bg-ink-strong": variant === "default",
          "border-transparent bg-border text-ink hover:bg-border/80": variant === "secondary",
          "border-transparent bg-accent-red text-canvas hover:bg-accent-red/80": variant === "destructive",
          "border-transparent bg-accent-green text-canvas hover:bg-accent-green/80": variant === "positive",
          "border-transparent bg-accent-yellow text-ink hover:bg-accent-yellow/80": variant === "warning",
          "border-transparent bg-accent-info text-canvas hover:bg-accent-info/80": variant === "info",
          "text-ink border-border": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
