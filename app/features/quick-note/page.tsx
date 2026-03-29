import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';

export const metadata: Metadata = {
  title: 'Quick Note — ShortHand',
  description: 'Tap a student, type a note, done in 3 seconds.',
};

export default function QuickNotePage() {
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
          <a href="https://getshorthand.app" className="btn-primary">Try Free</a>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">✏️</span>
        <h1 className="detail-title">Quick <em>Note</em></h1>
        <p className="detail-desc">
          Tap a student&apos;s name, type what you observed, and you&apos;re done —
          in under 5 seconds. No menus to navigate, no forms to fill out.
          Every note is timestamped and stored, building a picture of each student over time.
          The faster it is to log, the more you&apos;ll actually do it.
        </p>

        <video
          src="/ShortHand%20quick%20notes.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ borderRadius: '20px', maxWidth: '360px', width: '100%', aspectRatio: '9/16', objectFit: 'cover', border: '1px solid var(--border-bright)' }}
        />
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <a href="https://getshorthand.app" className="btn-primary">Get Started Free →</a>
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
