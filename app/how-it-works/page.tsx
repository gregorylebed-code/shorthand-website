'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedLogo from '../../components/AnimatedLogo';

const btnHover = { scale: 1.04, y: -2 };
const btnTap   = { scale: 0.96 };

export default function HowItWorksPage() {
  return (
    <>
      <div className="glow-field" aria-hidden>
        <span className="g1" /><span className="g2" /><span className="g3" />
        <span className="g4" /><span className="g5" />
      </div>

      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <AnimatedLogo />
            <span className="nav-badge">Built by a Teacher</span>
          </div>
          <motion.a
            href="/install"
            className="btn-primary"
            whileHover={btnHover}
            whileTap={btnTap}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Get ShortHand
          </motion.a>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="install-hero">
        <div className="section-label">See It In Action</div>
        <h1 className="install-title">How ShortHand<br /><em>Works</em></h1>
        <p className="install-sub">
          ShortHand has grown a lot. New walkthroughs are coming soon — but the best way
          to see it is to try it yourself. It&apos;s free, installs in seconds, and works
          on any device.
        </p>
      </div>

      <div className="detail-cta-section" style={{ paddingTop: '1rem' }}>
        <h2 className="detail-cta-heading">Try it yourself.</h2>
        <p className="detail-cta-sub">Free to use. Works on any device. No app store needed.</p>
        <motion.a
          href="/install"
          className="btn-primary"
          whileHover={btnHover}
          whileTap={btnTap}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Get ShortHand →
        </motion.a>
      </div>

      <footer>
        <div className="footer-logo">ShortHand</div>
        <div className="footer-tagline">Built by a teacher, for teachers.</div>
        <a href="mailto:hello@getshorthand.app" className="footer-email">hello@getshorthand.app</a>
        <div className="footer-copy">© 2026 ShortHand. All rights reserved. · <a href="/privacy" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a></div>
      </footer>
    </>
  );
}
