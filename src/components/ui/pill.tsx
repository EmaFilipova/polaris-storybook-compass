
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pillVariants = cva(
  "inline-flex items-center gap-2 px-2 py-[2px] border-radius-[100px] text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-[#E6F6FF] text-[#03449E]", // Blue
        warning: "bg-[#FFF8E6] text-[#946300]",  // Orange
        error: "bg-[#FFE6E6] text-[#BA0000]",    // Red
        success: "bg-[#E7F9E9] text-[#097A29]",  // Green
        neutral: "bg-[#F1F1F1] text-[#3F3F3F]",  // Gray
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
  onDismiss?: () => void
  dismissible?: boolean
  path?: string
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, children, onDismiss, dismissible = true, path, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pillVariants({ variant }), "rounded-full", className)}
        style={{
          padding: dismissible ? "2px 2px 2px 10px" : "4px 10px",  // Different padding for dismissible vs non-dismissible
          borderRadius: "100px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
        {...props}
      >
        {path && <span className="text-sm">{path}</span>}
        <span className="text-sm">{children}</span>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className={cn(
              "flex items-center justify-center",
              variant === "default" && "bg-[#C6E5FF] text-[#03449E] hover:bg-[#A1D2FF]",
              variant === "warning" && "bg-[#FFE8B2] text-[#946300] hover:bg-[#FFD980]",
              variant === "error" && "bg-[#FFB2B2] text-[#BA0000] hover:bg-[#FF8080]",
              variant === "success" && "bg-[#C6F0CC] text-[#097A29] hover:bg-[#A1E5AD]",
              variant === "neutral" && "bg-[#DDDDDD] text-[#3F3F3F] hover:bg-[#CCCCCC]"
            )}
            style={{
              width: "15px",
              height: "15px",
              flexShrink: 0,
              borderRadius: "50%"
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="w-full h-full"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14ZM8 6.9425L9.9425 5L11 6.0575L9.0575 8L11 9.9425L9.9425 11L8 9.0575L6.0575 11L5 9.9425L6.9425 8L5 6.0575L6.0575 5L8 6.9425Z" 
                fill="currentColor"
              />
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M8 0.5C3.8525 0.5 0.5 3.8525 0.5 8C0.5 12.1475 3.8525 15.5 8 15.5C12.1475 15.5 15.5 12.1475 15.5 8C15.5 3.8525 12.1475 0.5 8 0.5ZM2 8C2 11.3075 4.6925 14 8 14C11.3075 14 14 11.3075 14 8C14 4.6925 11.3075 2 8 2C4.6925 2 2 4.6925 2 8Z" 
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Pill.displayName = "Pill"

export { Pill, pillVariants }
