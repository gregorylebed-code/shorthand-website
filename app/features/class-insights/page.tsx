import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Class Insights — ShortHand',
  description: 'Get an AI summary of how your class has been — and SEL mini-lesson ideas to match.',
};

export default function ClassInsightsPage() {
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
          <TrackedLink href="https://getshorthand.app" className="btn-primary" label="nav_try_free_class-insights">Try Free</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">🧠</span>
        <h1 className="detail-title">Class <em>Insights</em></h1>
        <p className="detail-desc">
          Pick a time window — yesterday, the past week, or the week before —
          and ShortHand reads through your notes and gives you an honest summary
          of how the class has been. Not just what happened, but what it means:
          where the group struggled, where they shone, and what keeps coming up.
          From there, the AI suggests targeted mini SEL lessons you can drop into
          any spare five minutes — built around what your specific class actually needs right now.
        </p>

        <iframe
          src="https://www.youtube.com/embed/FjKXfKskJWE?enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '20px', maxWidth: '360px', width: '100%', aspectRatio: '9/16', border: '1px solid var(--border-bright)' }}
        />
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="https://getshorthand.app" className="btn-primary" label="cta_get_started_class-insights">Get Started Free →</TrackedLink>
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
