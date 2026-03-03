import { useState } from 'react';

const GRADIENT_CSS = 'linear-gradient(135deg, #8BB9FF 0%, #B9B3F5 50%, #F6B6E8 100%)';

const stops = [
  { label: 'Start', value: '#8BB9FF', position: '0%' },
  { label: 'Middle', value: '#B9B3F5', position: '50%' },
  { label: 'End', value: '#F6B6E8', position: '100%' },
];

export default function GradientPreview() {
  const [copied, setCopied] = useState(false);

  async function copyGradient() {
    try {
      await navigator.clipboard.writeText(GRADIENT_CSS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const el = document.createElement('textarea');
      el.value = GRADIENT_CSS;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="space-y-4">
      <button
        onClick={copyGradient}
        className="group relative w-full overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
      >
        <div
          className="h-40 w-full sm:h-48"
          style={{ background: GRADIENT_CSS }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
          <span className="rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-gray-800">
            {copied ? 'Copied!' : 'Click to copy CSS'}
          </span>
        </div>
      </button>

      <div className="flex justify-between px-2">
        {stops.map((stop) => (
          <div key={stop.label} className="flex flex-col items-center gap-1.5">
            <div
              className="h-8 w-8 rounded-full border border-gray-200"
              style={{
                backgroundColor: stop.value,
                borderColor: 'var(--semantic-border-default, #E4E4E7)',
              }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--semantic-text-secondary, #6B6F9C)' }}
            >
              {stop.label} ({stop.position})
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: 'var(--semantic-text-hint, #A3A6C8)' }}
            >
              {stop.value}
            </span>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg p-3 font-mono text-xs"
        style={{
          backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
          color: 'var(--semantic-text-primary, #2D2E4A)',
        }}
      >
        background: {GRADIENT_CSS};
      </div>
    </div>
  );
}
