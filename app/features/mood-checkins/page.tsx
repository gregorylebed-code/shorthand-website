import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Shoutout Wall — ShortHand',
  description: 'A dedicated feed for celebrating student wins. Get an alert when any student goes 14+ days without recognition so no one gets overlooked.',
  alternates: { canonical: 'https://getshorthandapp.com/features/mood-checkins' },
  openGraph: {
    title: 'Shoutout Wall — ShortHand',
    description: 'A dedicated feed for celebrating student wins. Get an alert when any student goes 14+ days without recognition so no one gets overlooked.',
    url: 'https://getshorthandapp.com/features/mood-checkins',
    type: 'website',
    images: [{ url: 'https://getshorthandapp.com/og-image.png', width: 1200, height: 630, alt: 'ShortHand — Built by a teacher, for teachers.' }],
  },
};

export default function ShoutoutWallPage() {
  return (
    <>
      <div className="glow-field" aria-hidden>
        <span className="g1" /><span className="g2" /><span className="g3" />
        <span className="g4" />
        <span className="g5" />
      </div>

      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <AnimatedLogo />
            <span className="nav-badge">Built by a Teacher</span>
          </div>
          <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="nav_try_free_mood-checkins">Get ShortHand</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">🌟</span>
        <h1 className="detail-title">The Shoutout <em>Wall</em></h1>
        <p className="detail-desc">
          Most teachers are great at catching problems. The hard part is being
          just as consistent about catching the wins — especially for the quiet kids
          who never cause trouble and rarely ask for attention.
        </p>
        <p className="detail-desc">
          The Shoutout Wall is a dedicated feed for celebrating student moments:
          Kindness, Leadership, Persistence, Teamwork, Growth, Creativity, and more.
          Submit one with voice-to-text or quick-select chips — it takes three seconds.
        </p>
        <p className="detail-desc">
          And if any student goes more than 14 days without receiving recognition,
          ShortHand flags them automatically. No one gets overlooked on accident.
        </p>
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="cta_get_started_mood-checkins">Get Started Free →</TrackedLink>
      </div>

      <footer>
        <div className="footer-logo">ShortHand</div>
        <div className="footer-tagline">Built by a teacher, for teachers.</div>
        <a href="mailto:hello@getshorthand.app" className="footer-email">hello@getshorthand.app</a>
        <div className="footer-copy">© 2026 ShortHand. All rights reserved.</div>
      </footer>
    </>
  );
}
