import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default",
  {
    variants: {
      variant: {
        default:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
        programming:
          "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
        web:
          "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
        data:
          "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
        cloud:
          "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",
        soft:
          "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-400",
        secondary:
          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        outline:
          "border border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
