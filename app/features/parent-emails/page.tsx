import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';
import TrackedLink from '../../../components/TrackedLink';

export const metadata: Metadata = {
  title: 'Parent Communication — ShortHand',
  description: 'Log every call, email, and meeting. One tap exports the full history for IEP meetings.',
};

export default function ParentCommunicationPage() {
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
          <TrackedLink href="/install" className="btn-primary" label="nav_try_free_parent-emails">Get ShortHand</TrackedLink>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">✉️</span>
        <h1 className="detail-title">Parent <em>Communication</em></h1>
        <p className="detail-desc">
          Every phone call, email, meeting, and ParentSquare message — logged in one place,
          sorted by date, grouped by month. Mark entries as IEP Related or Urgent.
          Set follow-up dates with overdue warnings so nothing gets dropped.
        </p>
        <p className="detail-desc">
          When an IEP meeting comes up, hit <strong>IEP Copy</strong> and the app exports
          the student&apos;s entire communication history, formatted and ready to paste into
          official docs. No scrambling. No &quot;I think I emailed them in October.&quot;
        </p>
        <p className="detail-desc">
          Need to reach out but don&apos;t know how to start? ShortHand drafts a clear,
          professional message directly from your notes — you review it, adjust the tone,
          and send.
        </p>
        <Link href="/" className="detail-back" style={{ marginTop: '16px' }}>← Back to home</Link>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
        <p className="detail-cta-sub">Free to start. Works on any device.</p>
        <TrackedLink href="/install" className="btn-primary" label="cta_get_started_parent-emails">Get Started Free →</TrackedLink>
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
