import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'AI Reports — ShortHand',
  description: 'Turn months of raw notes into polished, parent-ready progress reports in seconds.',
};

export default function AIReportsPage() {
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
          <TrackedLink href="/install" className="btn-primary" label="nav_try_free_ai-reports">Get ShortHand</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">📄</span>
        <h1 className="detail-title">AI <em>Reports</em></h1>
        <p className="detail-desc">
          Report writing used to eat entire Sunday evenings. With ShortHand, your notes
          become the source material and AI does the drafting. Select a student, pick a
          format — Quick Note, Standard, or Detailed — and in seconds you have a polished,
          professional write-up ready to review and send.
        </p>
        <p className="detail-desc">
          The AI works only from what you actually logged. Your observations, your language —
          just the hard part done for you. Not happy with the first draft? Tell it to adjust
          the tone, shorten it, or shift the focus. It rewrites on the spot until it sounds right.
        </p>
        <p className="detail-desc">
          Your voice. Your observations. No more Sunday paperwork.
        </p>
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="/install" className="btn-primary" label="cta_get_started_ai-reports">Get Started Free →</TrackedLink>
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
