"use client";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  light?: boolean;
}

export function Logo({ className = "", variant = "full", light = false }: LogoProps) {
  if (variant === "icon") {
    return (
      <img
        src="/favicon.png"
        alt="AW GOTRAVEL"
        className={`w-10 h-10 object-contain ${className}`}
      />
    );
  }

  return (
    <img
      src="/logo.png"
      alt="AW GOTRAVEL — Private Travel Design"
      className={`h-10 sm:h-12 object-contain ${light ? "" : "brightness-0"} ${className}`}
    />
  );
}
