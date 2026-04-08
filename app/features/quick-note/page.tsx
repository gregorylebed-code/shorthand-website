import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Quick Note — ShortHand',
  description: 'Tap a student, speak or type a note, done in under 5 seconds. Voice-to-text, auto-tagging, and smart shortcuts built in.',
  openGraph: {
    title: 'Quick Note — ShortHand',
    description: 'Tap a student, speak or type a note, done in under 5 seconds. Voice-to-text, auto-tagging, and smart shortcuts built in.',
    url: 'https://getshorthand.app/features/quick-note',
    type: 'website',
  },
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
          <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="nav_try_free_quick-note">Get ShortHand</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">✏️</span>
        <h1 className="detail-title">Quick <em>Note</em></h1>
        <p className="detail-desc">
          Tap a student&apos;s name, speak or type what you observed, and you&apos;re done —
          in under 5 seconds. No menus to navigate, no forms to fill out.
          Every note is timestamped and stored automatically, building a picture of
          each student over time.
        </p>
        <p className="detail-desc">
          Student photos appear right in the suggestions dropdown, so you&apos;re always sure you&apos;re logging the right kid — especially helpful in larger classes or when you&apos;re moving fast.
        </p>
        <p className="detail-desc">
          Voice-to-text lets you log hands-free while you&apos;re still moving around the room.
          Smart Shorthand lets you set custom abbreviations that expand instantly —
          so &quot;ss&quot; becomes &quot;Social Studies&quot; before you even finish typing.
          The AI reads your note and auto-tags it with behavior categories like
          Kindness, Participation, or Growth — no manual sorting required.
        </p>
        <p className="detail-desc">
          The faster it is to log, the more you&apos;ll actually do it.
        </p>

        <div className="video-frame-wrap" style={{ maxWidth: 360, marginBottom: 80 }}>
          <iframe
            src="https://www.youtube.com/embed/6-wrVnpMLiA?enablejsapi=1"
            title="Quick Note walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="https://classroom-pulse-public.vercel.app" className="btn-primary" label="cta_get_started_quick-note">Get Started Free →</TrackedLink>
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
