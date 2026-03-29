import Link from 'next/link';
import type { Metadata } from 'next';
import AnimatedLogo from '../../../components/AnimatedLogo';

export const metadata: Metadata = {
  title: 'Parent Emails — ShortHand',
  description: 'Draft professional parent emails with one tap.',
};

export default function ParentEmailsPage() {
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
        <span className="detail-icon">✉️</span>
        <h1 className="detail-title">Parent <em>Emails</em></h1>
        <p className="detail-desc">
          Communicating with parents is important — but finding the right words after a long
          day is hard. ShortHand drafts clear, warm, and professional parent emails directly
          from your notes. You review, adjust the tone, and send. The conversation starts right,
          every time.
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
