import { useState } from 'react';

interface ColorItem {
  name: string;
  value: string;
  description?: string;
}

interface Props {
  colors: ColorItem[];
}

export default function ColorPalette({ colors }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function copyHex(hex: string, index: number) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = hex;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {colors.map((color, i) => (
        <button
          key={color.name}
          onClick={() => copyHex(color.value, i)}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
          style={{ borderColor: 'var(--semantic-border-default, #E4E4E7)' }}
        >
          <div
            className="h-20 w-full"
            style={{ backgroundColor: color.value }}
          />
          <div className="px-3 py-2 text-left">
            <p
              className="text-sm font-medium"
              style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}
            >
              {color.name}
            </p>
            <p
              className="font-mono text-xs"
              style={{ color: 'var(--semantic-text-secondary, #6B6F9C)' }}
            >
              {color.value.toUpperCase()}
            </p>
            {color.description && (
              <p
                className="mt-0.5 text-xs"
                style={{ color: 'var(--semantic-text-hint, #A3A6C8)' }}
              >
                {color.description}
              </p>
            )}
          </div>
          {copiedIndex === i && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm font-medium text-white">
              Copied!
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
