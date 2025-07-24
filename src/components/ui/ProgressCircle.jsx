import React from "react";

export function ProgressCircle({
  rating = 0,
  maxRating = 10,
  size = 80,
  strokeWidth = 10,
  color = "#0F6BE9",
}) {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = rating / maxRating;
  const offset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${center} ${center})`}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
          />

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </g>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
          fill="currentColor"
        >
          {rating.toFixed(1)}
        </text>
      </svg>
    </div>
  );
}
