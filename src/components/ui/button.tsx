import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-ink text-canvas shadow hover:bg-ink/90": variant === "default",
            "bg-accent-red text-canvas shadow-sm hover:bg-accent-red/90": variant === "destructive",
            "border border-border bg-transparent shadow-sm hover:bg-border/30 hover:text-ink": variant === "outline",
            "bg-border text-ink shadow-sm hover:bg-border/80": variant === "secondary",
            "hover:bg-border/30 hover:text-ink text-text-body": variant === "ghost",
            "text-ink underline-offset-4 hover:underline": variant === "link",
          },
          {
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-sm px-3 text-xs": size === "sm",
            "h-10 rounded-sm px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
