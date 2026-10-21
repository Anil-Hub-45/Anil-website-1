import React from 'react';

interface BotanicalProps {
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  accentColor?: string;
}

/** Single or paired textured Sage leaves with fine ink veins */
export const SageLeaf: React.FC<BotanicalProps> = ({
  className = 'w-12 h-12 text-[#234735]',
  strokeColor = 'currentColor',
}) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 115 C48 95, 45 70, 52 40 C56 22, 65 10, 72 5 C68 20, 72 38, 70 55 C67 75, 58 98, 50 115 Z"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(201, 211, 184, 0.22)"
    />
    <path
      d="M52 40 C45 35, 38 34, 30 38 C35 24, 45 15, 55 12"
      stroke={strokeColor}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="1 1"
    />
    {/* Veins */}
    <path
      d="M51 90 C56 86, 62 84, 66 84 M52 75 C58 70, 64 68, 68 67 M53 60 C59 55, 65 52, 69 50 M53 45 C58 40, 64 36, 68 33"
      stroke={strokeColor}
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.7"
    />
    <path
      d="M50 115 C44 98, 30 75, 26 55 C23 38, 28 25, 32 18 C30 30, 24 45, 28 65 C32 85, 42 102, 50 115 Z"
      stroke={strokeColor}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(133, 143, 101, 0.15)"
      opacity="0.85"
    />
  </svg>
);

/** Slender herb stem with branching leaves */
export const HerbStem: React.FC<BotanicalProps> = ({
  className = 'w-16 h-32 text-[#234735]',
  strokeColor = 'currentColor',
}) => (
  <svg
    viewBox="0 0 80 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M40 155 C39 125, 41 85, 38 45 C36 28, 32 15, 28 8"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Leaves left & right */}
    <path
      d="M39 120 C32 115, 18 116, 12 110 C18 103, 30 108, 39 114"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
    <path
      d="M40 100 C48 95, 62 97, 68 91 C62 84, 50 88, 40 94"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
    <path
      d="M38 78 C30 73, 16 75, 10 68 C16 62, 28 66, 38 72"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
    <path
      d="M39 56 C46 51, 60 52, 65 46 C59 40, 48 44, 38 50"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
    <path
      d="M35 34 C28 29, 18 31, 14 26 C19 21, 28 24, 34 30"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
    <path
      d="M32 15 C33 9, 30 5, 28 4 C24 8, 25 14, 30 16"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="rgba(133, 143, 101, 0.3)"
      strokeLinecap="round"
    />
  </svg>
);

/** Delicate heirloom tomato branch with tiny blossom */
export const TomatoBranch: React.FC<BotanicalProps> = ({
  className = 'w-16 h-16 text-[#234735]',
  strokeColor = 'currentColor',
  accentColor = '#C77B52',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Stem */}
    <path
      d="M10 95 C30 85, 55 70, 75 40 C85 25, 95 15, 110 10"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Tomato fruit */}
    <circle
      cx="45"
      cy="75"
      r="22"
      stroke={accentColor}
      strokeWidth="2"
      fill="rgba(199, 123, 82, 0.15)"
    />
    {/* Calyx star */}
    <path
      d="M45 53 L42 46 L45 49 L49 46 L47 53 L53 52 L48 56 L52 60 L45 57 L40 60 L43 56 L38 52 Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      fill="rgba(133, 143, 101, 0.4)"
      strokeLinejoin="round"
    />
    {/* Tomato shading vein */}
    <path
      d="M35 70 C33 80, 42 90, 52 88"
      stroke={accentColor}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* Leaves */}
    <path
      d="M75 40 C85 38, 98 42, 102 36 C95 30, 84 32, 75 38"
      stroke={strokeColor}
      strokeWidth="1.6"
      fill="rgba(201, 211, 184, 0.25)"
      strokeLinecap="round"
    />
  </svg>
);

/** Sliced Citrus Wheel */
export const CitrusSlice: React.FC<BotanicalProps> = ({
  className = 'w-14 h-14 text-[#234735]',
  strokeColor = 'currentColor',
  accentColor = '#C77B52',
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer rind */}
    <circle cx="50" cy="50" r="44" stroke={strokeColor} strokeWidth="2" />
    <circle
      cx="50"
      cy="50"
      r="39"
      stroke={strokeColor}
      strokeWidth="1.2"
      strokeDasharray="2 3"
    />
    <circle cx="50" cy="50" r="8" stroke={strokeColor} strokeWidth="1.4" fill="rgba(245, 240, 229, 0.7)" />
    {/* Segments */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 42 C45 38, 38 32, 38 20 C42 16, 48 16, 50 16 C52 16, 58 16, 62 20 C62 32, 55 38, 50 42 Z"
          stroke={accentColor}
          strokeWidth="1.4"
          fill="rgba(199, 123, 82, 0.12)"
          strokeLinejoin="round"
        />
        {/* Pulp texture */}
        <circle cx="50" cy="26" r="1.5" fill={accentColor} opacity="0.4" />
      </g>
    ))}
  </svg>
);

/** Botanical Seed Pod / Grain Stalk */
export const SeedPod: React.FC<BotanicalProps> = ({
  className = 'w-12 h-16 text-[#234735]',
  strokeColor = 'currentColor',
}) => (
  <svg
    viewBox="0 0 60 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M30 115 C30 85, 30 50, 30 10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
    {[25, 45, 65, 85].map((y, idx) => (
      <g key={idx}>
        <path
          d={`M30 ${y} C22 ${y - 8}, 14 ${y - 12}, 10 ${y - 6} C12 ${y + 2}, 22 ${y + 4}, 30 ${y}`}
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="rgba(133, 143, 101, 0.2)"
        />
        <path
          d={`M30 ${y - 5} C38 ${y - 13}, 46 ${y - 17}, 50 ${y - 11} C48 ${y - 3}, 38 ${y - 1}, 30 ${y - 5}`}
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="rgba(201, 211, 184, 0.25)"
        />
      </g>
    ))}
    <path d="M30 15 C26 8, 30 4, 30 2 C30 4, 34 8, 30 15" stroke={strokeColor} strokeWidth="1.6" />
  </svg>
);

/** Rotating or static circular artisan seal badge */
export const StampBadge: React.FC<{
  className?: string;
  rotating?: boolean;
}> = ({ className = 'w-28 h-28', rotating = false }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    <svg
      viewBox="0 0 140 140"
      className={`w-full h-full text-[#234735] ${rotating ? 'animate-[spin_24s_linear_infinite]' : ''}`}
      aria-hidden="true"
    >
      <circle cx="70" cy="70" r="64" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="70" cy="70" r="58" stroke="currentColor" strokeWidth="1.5" />
      <path
        id="stampCirclePath"
        d="M 70, 70 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
        fill="none"
      />
      <text
        fontSize="8.5"
        letterSpacing="0.22em"
        fill="#234735"
        fontWeight="600"
        className="uppercase font-sans"
      >
        <textPath href="#stampCirclePath" startOffset="0%">
          FRESH · MINDFUL · MADE TO GATHER · SAGE ·
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <SageLeaf className="w-8 h-8 text-[#234735]" />
    </div>
  </div>
);

/** Large delicate botanical engraving for section breaks & footer */
export const BotanicalEngraving: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = 'w-96 h-96', opacity = 0.25 }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Central main stem */}
    <path
      d="M200 390 C195 310, 205 220, 195 130 C190 85, 175 45, 160 15"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    {/* Left Branch 1 */}
    <path
      d="M198 320 C165 300, 115 285, 75 295 C95 270, 150 270, 196 300"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
    />
    <path d="M115 285 C145 280, 175 290, 196 305" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />

    {/* Right Branch 1 */}
    <path
      d="M202 280 C240 260, 290 265, 335 240 C310 230, 250 240, 200 260"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
    />

    {/* Left Branch 2 */}
    <path
      d="M197 220 C150 195, 110 185, 60 195 C85 165, 145 170, 195 200"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
    />
    {/* Right Branch 2 */}
    <path
      d="M196 170 C240 145, 285 140, 330 115 C295 110, 240 125, 194 150"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.08"
      strokeLinecap="round"
    />

    {/* Top Flower / Seed Cluster */}
    <path
      d="M160 15 C150 10, 155 0, 165 5 C175 10, 170 20, 160 15 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <circle cx="155" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <circle cx="168" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <circle cx="180" cy="30" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
  </svg>
);
