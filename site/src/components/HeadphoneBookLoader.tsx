const TOKENS = {
  light: {
    brandPrimary: "#7C8DF5",
    brandBlue: "#8BB9FF",
    brandPurple: "#B9B3F5",
    brandPink: "#F6B6E8",
    accentPurple: "#9A8CF2",
    accentPink: "#F3A6DC",
    accentBlue: "#A5C7FF",
    textPrimary: "#2D2E4A",
    textSecondary: "#6B6F9C",
    textHint: "#A3A6C8",
    bgMain: "#F7F8FD",
    bgCard: "#FFFFFF",
    bgSubtle: "#EEF0FA",
    gray200: "#E4E4E7",
    gray300: "#D4D4D8",
    gray400: "#A1A1AA",
  },
  dark: {
    brandPrimary: "#8B9BFF",
    brandBlue: "#7AABFF",
    brandPurple: "#A8A2E6",
    brandPink: "#E5A5D7",
    accentPurple: "#ABA0FF",
    accentPink: "#FF9ED4",
    accentBlue: "#8DB8FF",
    textPrimary: "#F5F5F7",
    textSecondary: "#A1A1A6",
    textHint: "#636366",
    bgMain: "#18181B",
    bgCard: "#27272A",
    bgSubtle: "#3F3F46",
    gray200: "#3F3F46",
    gray300: "#52525B",
    gray400: "#71717A",
  },
};

interface Props {
  size?: number;
  dark?: boolean;
}

export default function HeadphoneBookLoader({ size = 80, dark = false }: Props) {
  const t = dark ? TOKENS.dark : TOKENS.light;
  const cx = 44, cy = 28;

  const inner = [
    { ch: "♪", r: 16, angle: 200, sz: 9, color: t.brandPink, dur: 2.0, delay: 0 },
    { ch: "A", r: 16, angle: 225, sz: 8, color: t.brandBlue, dur: 2.2, delay: 0.15 },
    { ch: "♫", r: 16, angle: 250, sz: 9, color: t.brandPurple, dur: 2.1, delay: 0.3 },
    { ch: "b", r: 16, angle: 275, sz: 8, color: t.accentPurple, dur: 2.3, delay: 0.45 },
    { ch: "♪", r: 16, angle: 300, sz: 9, color: t.accentPink, dur: 2.0, delay: 0.6 },
    { ch: "c", r: 16, angle: 325, sz: 8, color: t.brandPrimary, dur: 2.2, delay: 0.75 },
    { ch: "♫", r: 16, angle: 350, sz: 9, color: t.brandPink, dur: 2.1, delay: 0.9 },
    { ch: "R", r: 16, angle: 175, sz: 8, color: t.brandBlue, dur: 2.3, delay: 1.05 },
  ];
  const mid = [
    { ch: "♪", r: 26, angle: 190, sz: 11, color: t.brandPink, dur: 2.5, delay: 0.1 },
    { ch: "♫", r: 26, angle: 215, sz: 10, color: t.brandPurple, dur: 2.8, delay: 0.35 },
    { ch: "A", r: 26, angle: 240, sz: 10, color: t.brandBlue, dur: 2.6, delay: 0.55 },
    { ch: "♪", r: 26, angle: 260, sz: 11, color: t.accentPink, dur: 2.4, delay: 0.7 },
    { ch: "♫", r: 26, angle: 280, sz: 10, color: t.brandPurple, dur: 2.7, delay: 0.9 },
    { ch: "b", r: 26, angle: 300, sz: 10, color: t.accentPurple, dur: 2.5, delay: 1.1 },
    { ch: "♪", r: 26, angle: 325, sz: 11, color: t.brandBlue, dur: 2.3, delay: 0.2 },
    { ch: "♫", r: 26, angle: 350, sz: 10, color: t.brandPink, dur: 2.6, delay: 0.5 },
    { ch: "c", r: 26, angle: 170, sz: 10, color: t.brandPrimary, dur: 2.4, delay: 0.8 },
  ];
  const outer = [
    { ch: "♪", r: 38, angle: 185, sz: 13, color: t.brandPink, dur: 3.0, delay: 0 },
    { ch: "c", r: 38, angle: 205, sz: 10, color: t.brandPrimary, dur: 3.2, delay: 0.25 },
    { ch: "♫", r: 38, angle: 225, sz: 14, color: t.brandPurple, dur: 2.8, delay: 0.5 },
    { ch: "♪", r: 38, angle: 245, sz: 12, color: t.accentPink, dur: 3.1, delay: 0.75 },
    { ch: "A", r: 38, angle: 260, sz: 11, color: t.brandBlue, dur: 3.0, delay: 1.0 },
    { ch: "♫", r: 38, angle: 275, sz: 13, color: t.brandPink, dur: 2.9, delay: 0.15 },
    { ch: "♪", r: 38, angle: 290, sz: 12, color: t.brandPurple, dur: 3.3, delay: 0.4 },
    { ch: "b", r: 38, angle: 310, sz: 11, color: t.accentPurple, dur: 3.0, delay: 0.65 },
    { ch: "♫", r: 38, angle: 330, sz: 14, color: t.brandBlue, dur: 2.8, delay: 0.85 },
    { ch: "♪", r: 38, angle: 350, sz: 12, color: t.accentPink, dur: 3.2, delay: 1.1 },
    { ch: "R", r: 38, angle: 170, sz: 11, color: t.brandPrimary, dur: 3.0, delay: 0.3 },
    { ch: "♫", r: 38, angle: 160, sz: 13, color: t.brandPink, dur: 2.9, delay: 0.6 },
  ];

  const allParticles = [...inner, ...mid, ...outer];

  const sparkles: Array<{
    sx: number; sy: number; ex: number; ey: number;
    color: string; size: number; dur: number; delay: number;
  }> = [];
  for (let i = 0; i < 14; i++) {
    const angle = (160 + i * 14.3) * Math.PI / 180;
    const r1 = 12 + (i % 3) * 3;
    const r2 = 30 + (i % 4) * 6;
    const colors = [t.brandPink, t.brandPurple, t.brandBlue, t.accentPink, t.accentPurple, t.brandPrimary];
    sparkles.push({
      sx: cx + r1 * Math.cos(angle), sy: cy + r1 * Math.sin(angle),
      ex: cx + r2 * Math.cos(angle), ey: cy + r2 * Math.sin(angle),
      color: colors[i % 6], size: 1.2 + (i % 3) * 0.5,
      dur: 1.8 + (i % 4) * 0.3, delay: i * 0.14,
    });
  }

  return (
    <svg width={size} height={size * 1.3} viewBox="-10 -18 108 114">
      <defs>
        <linearGradient id={`brandGrad${dark ? "D" : "L"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={t.brandBlue} />
          <stop offset="50%" stopColor={t.brandPurple} />
          <stop offset="100%" stopColor={t.brandPink} />
        </linearGradient>
        <linearGradient id={`cupGrad${dark ? "D" : "L"}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={t.brandPurple} />
          <stop offset="100%" stopColor={t.brandPrimary} />
        </linearGradient>
      </defs>

      {/* Headphone band */}
      <path d="M14 48 Q14 14 44 14 Q74 14 74 48" fill="none"
        stroke={`url(#brandGrad${dark ? "D" : "L"})`} strokeWidth="4.5" strokeLinecap="round">
        <animate attributeName="d"
          values="M14 48 Q14 14 44 14 Q74 14 74 48;M14 46 Q14 12 44 12 Q74 12 74 46;M14 48 Q14 14 44 14 Q74 14 74 48"
          dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M20 46 Q20 20 44 20 Q68 20 68 46" fill="none" stroke="white" strokeWidth="0.8" opacity="0.15" />

      {/* Left ear cup */}
      <rect x="6" y="42" width="18" height="26" rx="7" fill={`url(#cupGrad${dark ? "D" : "L"})`} />
      <rect x="9" y="46" width="12" height="18" rx="5" fill="none" stroke={t.brandPink} strokeWidth="0.8" opacity="0.4" />
      <rect x="10.5" y="48" width="9"