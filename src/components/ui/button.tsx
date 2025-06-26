import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#FF3B9A] to-[#8624E1] text-white shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)] active:shadow-[0_0_10px_rgba(255,255,255,0.02),_-1px_-1px_5px_rgba(255,255,255,0.05),_3px_3px_10px_rgba(0,0,0,0.4),_inset_2px_2px_4px_rgba(0,0,0,0.3),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] active:transform active:translate-y-0.5 hover:from-[#FF4BA4] hover:to-[#9333EA]",
        destructive: "bg-gradient-to-r from-[#FF3B9A] to-[#8624E1] text-white shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)] active:shadow-[0_0_10px_rgba(255,255,255,0.02),_-1px_-1px_5px_rgba(255,255,255,0.05),_3px_3px_10px_rgba(0,0,0,0.4),_inset_2px_2px_4px_rgba(0,0,0,0.3),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] active:transform active:translate-y-0.5 hover:from-[#FF4BA4] hover:to-[#9333EA]",
        outline: "border-2 border-[#FF3B9A] bg-transparent text-[#FF3B9A] shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:bg-gradient-to-r hover:from-[#FF3B9A] hover:to-[#8624E1] hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)] active:shadow-[0_0_10px_rgba(255,255,255,0.02),_-1px_-1px_5px_rgba(255,255,255,0.05),_3px_3px_10px_rgba(0,0,0,0.4),_inset_2px_2px_4px_rgba(0,0,0,0.3),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] active:transform active:translate-y-0.5",
        secondary: "bg-gradient-to-r from-[#8624E1] to-[#FF3B9A] text-white shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)] active:shadow-[0_0_10px_rgba(255,255,255,0.02),_-1px_-1px_5px_rgba(255,255,255,0.05),_3px_3px_10px_rgba(0,0,0,0.4),_inset_2px_2px_4px_rgba(0,0,0,0.3),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] active:transform active:translate-y-0.5 hover:from-[#9333EA] hover:to-[#FF4BA4]",
        ghost: "hover:bg-gradient-to-r hover:from-[#FF3B9A] hover:to-[#8624E1] hover:text-white text-[#FF3B9A] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),_inset_-2px_-2px_4px_rgba(255,255,255,0.05)] active:transform active:translate-y-0.5",
        link: "text-[#FF3B9A] underline-offset-4 hover:text-[#8624E1] hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3",
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
