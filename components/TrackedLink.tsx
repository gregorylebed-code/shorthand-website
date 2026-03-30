'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackedLinkProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function TrackedLink({ href, label, className, children, style }: TrackedLinkProps) {
  function handleClick() {
    window.gtag?.('event', 'cta_click', {
      event_category: 'engagement',
      event_label: label,
      link_url: href,
    });
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
