export function TexronLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orange Trinity Knot */}
      <g>
        {/* Top petal */}
        <path
          d="M 50 40 C 50 25, 65 15, 75 15 C 85 15, 100 25, 100 40 C 100 35, 105 30, 110 35 C 115 40, 110 50, 100 55 C 85 65, 50 65, 50 40 Z"
          fill="#FF6B35"
        />
        {/* Bottom left petal */}
        <path
          d="M 30 75 C 15 70, 10 55, 20 45 C 25 40, 35 45, 40 55 C 42 60, 38 75, 30 75 Z"
          fill="#FF6B35"
        />
        {/* Bottom right petal */}
        <path
          d="M 120 75 C 135 70, 140 55, 130 45 C 125 40, 115 45, 110 55 C 108 60, 112 75, 120 75 Z"
          fill="#FF6B35"
        />
        {/* Center circle */}
        <circle cx="75" cy="50" r="12" fill="#FF6B35" />
      </g>

      {/* Text: TEXRON */}
      <text
        x="160"
        y="65"
        fontSize="48"
        fontWeight="bold"
        fill="#1B5E5E"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-1"
      >
        TEXRON
      </text>

      {/* Underline */}
      <line x1="160" y1="72" x2="360" y2="72" stroke="#1B5E5E" strokeWidth="2" />

      {/* Subtitle: Power Plant Systems */}
      <text
        x="160"
        y="95"
        fontSize="14"
        fill="#1B5E5E"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1"
      >
        Power Plant Systems
      </text>
    </svg>
  );
}
