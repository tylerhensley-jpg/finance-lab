"use client";

/* ─── SKETCH ICONS — shared set, same hand-drawn stroke style as the Hero timeline icons ───
   Conventions: 24×24 viewBox, strokeWidth 2, round caps/joins, low-opacity fills,
   1.2px detail strokes at ~0.35–0.5 opacity. */
export default function SketchIcon({ iconId, color = "currentColor", size = 28 }) {
  const s = color;
  const w = 2;
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { display: "block" } };

  switch (iconId) {
    /* Dashboard: panel + rising bars + trend spark */
    case "dashboard":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="7.5" y1="16.5" x2="7.5" y2="13" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="12" y1="16.5" x2="12" y2="10.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="16.5" y1="16.5" x2="16.5" y2="12" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <polyline points="6.5,9.5 11,7.5 17.5,8.5" stroke={s} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
      );

    /* Sliders: three tracks with offset thumbs */
    case "sliders":
      return (
        <svg {...p}>
          <line x1="4" y1="7" x2="20" y2="7" stroke={s} strokeWidth={w} strokeLinecap="round" opacity="0.4" />
          <line x1="4" y1="12" x2="20" y2="12" stroke={s} strokeWidth={w} strokeLinecap="round" opacity="0.4" />
          <line x1="4" y1="17" x2="20" y2="17" stroke={s} strokeWidth={w} strokeLinecap="round" opacity="0.4" />
          <circle cx="9" cy="7" r="2.4" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.15" />
          <circle cx="15.5" cy="12" r="2.4" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.15" />
          <circle cx="7" cy="17" r="2.4" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.15" />
        </svg>
      );

    /* Bolt: quick-decision lightning */
    case "bolt":
      return (
        <svg {...p}>
          <polygon
            points="13,2.5 5.5,13.5 11,13.5 9.5,21.5 18.5,10 12.5,10"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.12"
          />
        </svg>
      );

    /* Map pin: place-specific */
    case "pin":
      return (
        <svg {...p}>
          <path
            d="M12 21.5c4.5-4.6 7-8.2 7-11.5a7 7 0 1 0-14 0c0 3.3 2.5 6.9 7 11.5z"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.08"
          />
          <circle cx="12" cy="9.8" r="2.6" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.2" />
        </svg>
      );

    /* Shield + heart: protected, no strings */
    case "shield":
      return (
        <svg {...p}>
          <path
            d="M12 2.5l8 3.5v5c0 5-3.5 8.5-8 10.5C7.5 19.5 4 16 4 11V6z"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.08"
          />
          <path
            d="M12 15.5c-2.4-1.6-3.6-3-3.6-4.5 0-1.1 0.9-1.9 1.9-1.9 0.7 0 1.3 0.4 1.7 1 0.4-0.6 1-1 1.7-1 1 0 1.9 0.8 1.9 1.9 0 1.5-1.2 2.9-3.6 4.5z"
            stroke={s} strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.2"
          />
        </svg>
      );

    /* Pencil: built by a teacher */
    case "pencil":
      return (
        <svg {...p}>
          <path
            d="M5 19l1-4L16.5 4.5a1.8 1.8 0 0 1 2.5 0l0.5 0.5a1.8 1.8 0 0 1 0 2.5L9 18z"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.08"
          />
          <line x1="14.5" y1="6.5" x2="17.5" y2="9.5" stroke={s} strokeWidth={1.4} strokeLinecap="round" opacity="0.5" />
          <line x1="4" y1="21" x2="20" y2="21" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.35" />
        </svg>
      );

    /* Rocket: The Launchpad */
    case "rocket":
      return (
        <svg {...p}>
          <path
            d="M12 2.5c2.6 2 3.8 5 3.8 8 0 1.9-.3 3.5-.8 4.9H9c-.5-1.4-.8-3-.8-4.9 0-3 1.2-6 3.8-8z"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.08"
          />
          <circle cx="12" cy="9.5" r="1.8" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.2" />
          <path d="M9 13.5l-3 3.8c1.4-.1 2.6.2 3.4.9" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M15 13.5l3 3.8c-1.4-.1-2.6.2-3.4.9" stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 17.5c-.7 1.1-.7 2.4 0 4 .7-1.6.7-2.9 0-4z" stroke={s} strokeWidth={1.4} strokeLinejoin="round" fill={s} fillOpacity="0.2" />
        </svg>
      );

    /* Compass: navigation (matches the Hero compass) */
    case "compass":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.4" />
          <polygon points="14.5,9.5 9.5,14.5 10.8,10.8 14.5,9.5" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.2" />
          <polygon points="9.5,14.5 14.5,9.5 13.2,13.2 9.5,14.5" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.35" />
        </svg>
      );

    /* Flask: Catalyst, the lab companion */
    case "flask":
      return (
        <svg {...p}>
          <path
            d="M10 3.5v4L5.6 16.4c-.8 1.9.5 4.1 2.6 4.1h7.6c2.1 0 3.4-2.2 2.6-4.1L14 7.5v-4"
            stroke={s} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round"
            fill={s} fillOpacity="0.06"
          />
          <line x1="8.5" y1="3.5" x2="15.5" y2="3.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="7.3" y1="14" x2="16.7" y2="14" stroke={s} strokeWidth={1.2} strokeLinecap="round" opacity="0.4" />
          <circle cx="11" cy="17" r="1" stroke={s} strokeWidth={1.2} fill={s} fillOpacity="0.2" />
          <circle cx="14" cy="16" r="0.7" stroke={s} strokeWidth={1.2} fill={s} fillOpacity="0.2" />
        </svg>
      );

    /* Chart: growth curve with arrow */
    case "chart":
      return (
        <svg {...p}>
          <path d="M4 4v16h16" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="6.5,17 10.5,14.5 13.5,10.5 17.5,7" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="14.3,6.6 17.5,7 17.1,10.2" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="6.5" cy="17" r="1.1" fill={s} fillOpacity="0.35" stroke={s} strokeWidth={1.2} />
        </svg>
      );

    /* Coin: real money, real stakes */
    case "coins":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.06" />
          <path
            d="M14.6 9.3c-.5-1.1-3.5-1.4-4.2.2-.6 1.4 1.2 1.9 2 2.1.8.2 2.8.6 2.2 2.3-.6 1.5-3.7 1.3-4.3-.2"
            stroke={s} strokeWidth={w} strokeLinecap="round"
          />
          <line x1="12" y1="6.8" x2="12" y2="17.2" stroke={s} strokeWidth={1.4} strokeLinecap="round" opacity="0.6" />
        </svg>
      );

    /* Medal: earned, not given */
    case "medal":
      return (
        <svg {...p}>
          <circle cx="12" cy="9" r="5.5" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.08" />
          <polyline points="9.8,9 11.4,10.7 14.2,7.5" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.2 13.6L7.5 20.5l4.5-2 4.5 2-1.7-6.9" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill={s} fillOpacity="0.06" />
        </svg>
      );

    /* Microphone: authentic audience */
    case "mic":
      return (
        <svg {...p}>
          <rect x="9.5" y="3" width="5" height="9.5" rx="2.5" stroke={s} strokeWidth={w} fill={s} fillOpacity="0.12" />
          <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="12" y1="17.5" x2="12" y2="20.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="9" y1="20.5" x2="15" y2="20.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
        </svg>
      );

    /* Balance scale: designed for equity */
    case "scale":
      return (
        <svg {...p}>
          <line x1="12" y1="4.5" x2="12" y2="18.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <line x1="5" y1="6.5" x2="19" y2="6.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <circle cx="12" cy="4.5" r="1.2" stroke={s} strokeWidth={1.4} fill={s} fillOpacity="0.2" />
          <path d="M5 6.5l-2.2 5M5 6.5l2.2 5" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M2.3 11.5a2.7 2.7 0 0 0 5.4 0z" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.12" />
          <path d="M19 6.5l-2.2 5M19 6.5l2.2 5" stroke={s} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M16.3 11.5a2.7 2.7 0 0 0 5.4 0z" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.12" />
          <line x1="8.5" y1="18.5" x2="15.5" y2="18.5" stroke={s} strokeWidth={w} strokeLinecap="round" />
        </svg>
      );

    /* Cycle: year-long relationship */
    case "cycle":
      return (
        <svg {...p}>
          <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" stroke={s} strokeWidth={w} strokeLinecap="round" />
          <polyline points="17.5,2.8 17.3,6.7 13.4,6.5" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.3" fill={s} fillOpacity="0.35" stroke={s} strokeWidth={1.2} />
        </svg>
      );

    /* Graduation cap: college transition */
    case "gradcap":
      return (
        <svg {...p}>
          <polygon points="12,4.5 21.5,8.8 12,13 2.5,8.8" stroke={s} strokeWidth={w} strokeLinejoin="round" fill={s} fillOpacity="0.08" />
          <path d="M7 11.2v4.1c0 1.1 2.2 2.2 5 2.2s5-1.1 5-2.2v-4.1" stroke={s} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="21.5" y1="8.8" x2="21.5" y2="14" stroke={s} strokeWidth={1.4} strokeLinecap="round" opacity="0.6" />
          <circle cx="21.5" cy="15" r="1" fill={s} fillOpacity="0.3" stroke={s} strokeWidth={1.2} />
        </svg>
      );

    default:
      return null;
  }
}
