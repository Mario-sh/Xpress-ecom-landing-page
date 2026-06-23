"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand-500 text-white hover:bg-brand-400",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        cool: "border border-b-2 border-white/5 bg-gradient-to-t from-brand-600 to-brand-500 shadow-md shadow-brand-500/20 ring-1 ring-inset ring-white/10 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 text-white",
        outline:
          "border border-gray-700 bg-transparent hover:bg-gray-800 hover:text-white text-gray-200",
        secondary:
          "bg-gray-800 text-white hover:bg-gray-700/80",
        ghost: "hover:bg-gray-800 hover:text-white text-gray-300",
        link: "text-brand-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-11 w-11",
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

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton }

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-500 focus-visible:ring-brand-500/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/40 aria-invalid:border-red-500 text-white",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-[1.02] duration-300 transition text-brand-400",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90 focus-visible:ring-red-500/40",
        outline:
          "border border-gray-700 bg-gray-950/50 hover:bg-gray-900 hover:text-white",
        secondary:
          "bg-gray-800 text-white hover:bg-gray-700",
        ghost: "hover:bg-gray-900 hover:text-white",
        link: "text-brand-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-11 rounded-lg px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 has-[>svg]:px-6 text-base",
        xxl: "h-14 rounded-lg px-10 has-[>svg]:px-8 text-lg font-bold",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <>
      <Comp
        data-slot="button"
        className={cn(
          "relative border-0 shadow-none font-display",
          liquidbuttonVariants({ variant, size, className })
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0 h-full w-full rounded-inherit bg-gradient-to-br from-brand-400/20 to-brand-600/20
        shadow-[0_0_8px_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.3),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.2),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.05)] 
        transition-all group-hover:from-brand-400/30 group-hover:to-brand-600/30" />
        <div
          className="absolute inset-0 isolate -z-10 h-full w-full overflow-hidden rounded-inherit"
          style={{ backdropFilter: 'url("#container-glass")' }}
        />

        <div className="pointer-events-none z-10 relative">
          {children}
        </div>
        <GlassFilter />
      </Comp>
    </>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

// Minimal stub for MetalButton
export const MetalButton = Button;

