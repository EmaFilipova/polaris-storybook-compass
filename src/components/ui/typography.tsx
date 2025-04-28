
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-title-serif", className)} {...props}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-title-sans", className)} {...props}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("text-subtitle", className)} {...props}>
      {children}
    </h3>
  )
}

export function TypographyP({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-body-sans", className)} {...props}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className, ...props }: TypographyProps) {
  return (
    <blockquote className={cn("text-body-serif mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  )
}

export function TypographyLead({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-subtitle text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

export function TypographySmall({ children, className, ...props }: TypographyProps) {
  return (
    <small className={cn("text-caption text-muted-foreground", className)} {...props}>
      {children}
    </small>
  )
}

export function TypographyMono({ children, className, ...props }: TypographyProps) {
  return (
    <code className={cn("text-mono relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono", className)} {...props}>
      {children}
    </code>
  )
}
