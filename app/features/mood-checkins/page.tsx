import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Refine with AI — ShortHand',
  description: "Not happy with the first draft? Ask AI to rewrite it until it sounds exactly right.",
};

export default function RefineWithAIPage() {
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
          <TrackedLink href="https://getshorthand.app" className="btn-primary" label="nav_try_free_mood-checkins">Try Free</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">✨</span>
        <h1 className="detail-title">Refine <em>with AI</em></h1>
        <p className="detail-desc">
          AI writes a solid first draft — but it doesn&apos;t always land the way you want it to.
          Maybe the tone is too formal. Maybe it&apos;s too long. Maybe it just doesn&apos;t sound like you.
          Hit Refine, tell the AI what to change, and it rewrites it on the spot.
          You stay in control of every word that goes out.
        </p>

        <iframe
          src="https://www.youtube.com/embed/rmwQggu56Fo?enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '20px', maxWidth: '360px', width: '100%', aspectRatio: '9/16', border: '1px solid var(--border-bright)' }}
        />
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="https://getshorthand.app" className="btn-primary" label="cta_get_started_mood-checkins">Get Started Free →</TrackedLink>
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
