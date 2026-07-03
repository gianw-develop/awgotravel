"use client";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  light?: boolean;
}

export function Logo({ className = "", variant = "full", light = false }: LogoProps) {
  const primaryColor = light ? "#FFFFFF" : "#0B1D3A";
  const accentColor = "#C9A84C";

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="30" cy="30" r="28" stroke={accentColor} strokeWidth="2" fill="none" />
        <path
          d="M15 38L22 22L30 30L38 18L45 38"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M38 18L42 16L44 20L38 18Z" fill={accentColor} />
        <path
          d="M36 20C34 22 30 24 24 26"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeDasharray="2 2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 sm:w-12 sm:h-12"
      >
        <circle cx="25" cy="25" r="23" stroke={accentColor} strokeWidth="1.5" fill="none" />
        <path
          d="M25 8C17 8 10 14 10 22C10 30 17 38 25 42C33 38 40 30 40 22C40 14 33 8 25 8Z"
          fill="none"
          stroke={accentColor}
          strokeWidth="0.8"
          opacity="0.3"
        />
        <path
          d="M12 32L18 20L25 26L32 16L38 32"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M32 16L36 14L38 18L32 16Z" fill={accentColor} />
        <path
          d="M30 18C28 20 24 22 18 24"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="2 2"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className="text-lg sm:text-xl font-semibold tracking-[0.15em] leading-tight"
          style={{ color: primaryColor, fontFamily: "var(--font-heading)" }}
        >
          AW GOTRAVEL
        </span>
        <span
          className="text-[8px] sm:text-[9px] tracking-[0.35em] uppercase font-medium"
          style={{ color: accentColor, fontFamily: "var(--font-sans)" }}
        >
          Luxury Travel Services
        </span>
      </div>
    </div>
  );
}
