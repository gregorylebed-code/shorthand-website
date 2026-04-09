import Link from 'next/link';

const features = [
  { slug: 'quick-note',        label: 'Quick Note' },
  { slug: 'behavior-tracking', label: 'Never Miss a Student' },
  { slug: 'parent-emails',     label: 'Parent Communication' },
  { slug: 'ai-reports',        label: 'AI Reports' },
  { slug: 'class-insights',    label: 'Progress & Insights' },
];

export default function FeatureNav({ current }: { current: string }) {
  const idx = features.findIndex(f => f.slug === current);
  const next = features[(idx + 1) % features.length];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px 0' }}>
      <Link
        href={`/features/${next.slug}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 24px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '999px',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
          (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
        }}
      >
        Next: {next.label} →
      </Link>
    </div>
  );
}
