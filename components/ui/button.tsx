import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-500 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 hover:cursor-pointer focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary hover:bg-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-clip-padding hover:backdrop-filter hover:backdrop-blur-3xl hover:border border border-transparent hover:border-gray-400 border-opacity-30 hover:bg-gray-400 hover:bg-opacity-20 hover:border-opacity-40",
        link: "underline-offset-4 hover:underline text-primary",
        glassmorph: "bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-400 border-opacity-30 hover:bg-gray-400 hover:bg-opacity-20 hover:border-opacity-40",
        gradient: "bg-gradient-to-b from-purple-500 to-indigo-500 hover:border-primary/100  hover:bg-gradient-to-r transition-color shadow-[10px_10px_60px_10px] shadow-primary/20 hover:shadow-primary/60",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }