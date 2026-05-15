import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white hover:opacity-90 shadow-lg shadow-amber-900/30",
  outline:
    "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
  ghost: "text-white/70 hover:text-white",
  white: "bg-white text-[#0b0b0b] hover:bg-[#f5f5f5] shadow-lg",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-semibold tracking-wide rounded-full transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
