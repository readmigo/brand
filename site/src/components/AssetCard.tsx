interface FormatLink {
  label: string;
  url: string;
}

interface Props {
  name: string;
  src: string;
  formats: FormatLink[];
}

export default function AssetCard({ name, src, formats }: Props) {
  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{
        borderColor: 'var(--semantic-border-default, #E4E4E7)',
        backgroundColor: 'var(--semantic-surface-card, #FFFFFF)',
      }}
    >
      {/* Thumbnail */}
      <div
        className="flex items-center justify-center p-6"
        style={{
          backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
          minHeight: '120px',
        }}
      >
        <img
          src={src}
          alt={name}
          className="max-h-24 max-w-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <p
          className="text-sm font-semibold"
          style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}
        >
          {name}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {formats.map((fmt) => (
            <a
              key={fmt.url}
              href={fmt.url}
              download
              className="inline-block rounded-md px-2.5 py-1 text-xs font-medium uppercase transition-colors hover:opacity-80"
              style={{
                backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
                color: 'var(--semantic-text-secondary, #6B6F9C)',
              }}
            >
              {fmt.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
