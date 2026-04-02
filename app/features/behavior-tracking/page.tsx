import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Class Notes — ShortHand',
  description: 'Log a note for the whole class — track energy, lessons, and patterns over time.',
};

export default function ClassNotesPage() {
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
          <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="nav_try_free_behavior-tracking">Try Free</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">🏫</span>
        <h1 className="detail-title">Class <em>Notes</em></h1>
        <p className="detail-desc">
          Not every observation is about one student — sometimes it&apos;s the whole room.
          Class Notes let you log how the group showed up: the energy before a holiday,
          the lesson that actually clicked, the day everything went sideways.
          Over time, those notes become a record of your class as a unit —
          patterns you&apos;d never notice day to day but can&apos;t unsee once you see them.
        </p>

        <iframe
          src="https://www.youtube.com/embed/XCYl7TOolaQ?enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '20px', maxWidth: '360px', width: '100%', aspectRatio: '9/16', border: '1px solid var(--border-bright)' }}
        />
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="cta_get_started_behavior-tracking">Get Started Free →</TrackedLink>
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
