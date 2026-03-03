interface ButtonVariant {
  name: string;
  background: string;
  text: string;
  radius: string;
  sizes: {
    label: string;
    height: string;
    fontSize: string;
  }[];
}

interface Props {
  variants: ButtonVariant[];
}

export default function ButtonPreview({ variants }: Props) {
  return (
    <div className="space-y-10">
      {variants.map((variant) => (
        <div key={variant.name}>
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}
          >
            {variant.name}
          </h3>
          <div className="flex flex-wrap items-end gap-6">
            {variant.sizes.map((size) => (
              <div key={size.label} className="flex flex-col items-center gap-3">
                {/* Live button preview */}
                <button
                  style={{
                    backgroundColor: variant.background,
                    color: variant.text,
                    height: size.height,
                    fontSize: size.fontSize,
                    borderRadius: variant.radius,
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '80px',
                  }}
                >
                  {variant.name} {size.label}
                </button>

                {/* Token values table */}
                <div
                  className="rounded-lg p-3 text-xs"
                  style={{
                    backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
                    color: 'var(--semantic-text-secondary, #6B6F9C)',
                  }}
                >
                  <table className="border-separate border-spacing-x-3 border-spacing-y-1">
                    <tbody>
                      <tr>
                        <td className="font-medium" style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}>bg</td>
                        <td className="font-mono">{variant.background}</td>
                      </tr>
                      <tr>
                        <td className="font-medium" style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}>text</td>
                        <td className="font-mono">{variant.text}</td>
                      </tr>
                      <tr>
                        <td className="font-medium" style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}>height</td>
                        <td className="font-mono">{size.height}</td>
                      </tr>
                      <tr>
                        <td className="font-medium" style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}>font-size</td>
                        <td className="font-mono">{size.fontSize}</td>
                      </tr>
                      <tr>
                        <td className="font-medium" style={{ color: 'var(--semantic-text-primary, #2D2E4A)' }}>radius</td>
                        <td className="font-mono">{variant.radius}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
