import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  variant?: "card" | "modal";
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  variant = "card",
  className,
}: ProjectImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[var(--bg-elevated)]",
        variant === "card" && "aspect-[16/10]",
        variant === "modal" && "aspect-video max-h-[50vh]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={
          variant === "card"
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            : "(max-width: 768px) 100vw, 672px"
        }
        className="object-contain object-center p-2 sm:p-3"
      />
    </div>
  );
}
