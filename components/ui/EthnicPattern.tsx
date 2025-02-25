import React from "react";
import { cn } from "../../lib/utils";

interface EthnicPatternProps {
  className?: string;
  opacity?: number;
  width?: string;
  height?: string;
  asBackground?: boolean;
  color?: string;
}

export const EthnicPattern: React.FC<EthnicPatternProps> = ({
  className,
  opacity = 0.1,
  width = "100%",
  height = "auto",
  asBackground = false,
  color,
}) => {
  if (asBackground) {
    return (
      <div
        className={cn("absolute inset-0 -z-10 pointer-events-none", className)}
        style={{
          backgroundImage: `url('/images/ethnic-pattern.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity,
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      aria-hidden="true"
    >
      <img
        src="/images/ethnic-pattern.svg"
        alt=""
        style={{
          width,
          height,
          opacity,
          filter: color ? `drop-shadow(0 0 0 ${color})` : undefined,
        }}
      />
    </div>
  );
};
