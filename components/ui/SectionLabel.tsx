import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 mb-5",
        className
      )}
    >
      <span
        className={cn(
          "block w-6 h-px",
          dark ? "bg-[#d97706]" : "bg-[#d97706]"
        )}
      />
      <span
        className={cn(
          "section-label",
          dark ? "text-[#d97706]" : "text-[#d97706]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
