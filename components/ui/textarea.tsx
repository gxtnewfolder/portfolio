import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 transition-all duration-300 resize-y",
        "placeholder:text-gray-500",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
        "hover:border-blue-500/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400",
        "dark:focus:ring-blue-500/30 dark:hover:border-blue-400/50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
