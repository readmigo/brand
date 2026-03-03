interface CopyData {
  lang: string;
  data: Record<string, any>;
}

interface Props {
  copies: CopyData[];
}

function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, fullKey));
    } else if (Array.isArray(value)) {
      result[fullKey] = value.length > 0 ? JSON.stringify(value) : '(empty)';
    } else {
      result[fullKey] = value != null && value !== '' ? String(value) : '(empty)';
    }
  }
  return result;
}

export default function CopyViewer({ copies }: Props) {
  if (copies.length === 0) return null;

  // Flatten all copy data
  const flattened = copies.map((c) => ({
    lang: c.lang,
    entries: flattenObject(c.data),
  }));

  // Gather all unique keys
  const allKeys = Array.from(
    new Set(flattened.flatMap((f) => Object.keys(f.entries)))
  );

  return (
    <div className="overflow-x-auto">
      <table
        className="w-full text-sm"
        style={{ borderCollapse: 'separate', borderSpacing: 0 }}
      >
        <thead>
          <tr>
            <th
              className="sticky left-0 z-10 border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide"
              style={{
                borderColor: 'var(--semantic-border-default, #E4E4E7)',
                backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
                color: 'var(--semantic-text-secondary, #6B6F9C)',
              }}
            >
              Key
            </th>
            {flattened.map((col) => (
              <th
                key={col.lang}
                className="border-b px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                style={{
                  borderColor: 'var(--semantic-border-default, #E4E4E7)',
                  backgroundColor: 'var(--semantic-surface-subtle, #EEF0FA)',
                  color: 'var(--semantic-text-secondary, #6B6F9C)',
                  minWidth: '200px',
                }}
              >
                {col.lang}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allKeys.map((key) => (
            <tr key={key}>
              <td
                className="sticky left-0 z-10 border-b px-4 py-2 font-mono text-xs font-medium"
                style={{
                  borderColor: 'var(--semantic-border-default, #E4E4E7)',
                  backgroundColor: 'var(--semantic-surface-card, #FFFFFF)',
                  color: 'var(--semantic-text-primary, #2D2E4A)',
                }}
              >
                {key}
              </td>
              {flattened.map((col) => (
                <td
                  key={col.lang}
                  className="border-b px-4 py-2"
                  style={{
                    borderColor: 'var(--semantic-border-default, #E4E4E7)',
                    color:
                      col.entries[key] === '(empty)'
                        ? 'var(--semantic-text-hint, #A3A6C8)'
                        : 'var(--semantic-text-primary, #2D2E4A)',
                    maxWidth: '350px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {col.entries[key] ?? '(empty)'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
