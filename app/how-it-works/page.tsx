'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedLogo from '../../components/AnimatedLogo';

const videos = [
  { id: 'p8xubsh52SM', title: 'Welcome — Part 1' },
  { id: 'IEG8K4ivUjw', title: 'Welcome — Part 2' },
  { id: 'Znn8IT0o6kM', title: 'Welcome — Part 3' },
  { id: 'x0OfxlJ4p8E', title: 'Welcome — Part 4' },
  { id: 'aA0yu7wpbVM', title: 'Welcome — Part 5' },
  { id: 'sZYdBJ13GOw', title: 'Welcome — Part 6' },
];

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
          Watch these short videos to see exactly what ShortHand can do for you in the classroom.
        </p>
      </div>

      <div className="videos-section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="section-inner">
          <div className="videos-grid">
            {videos.map((v) => (
              <div key={v.id} className="video-card">
                <div className="video-frame-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?enablejsapi=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="video-title">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-cta-section">
        <h2 className="detail-cta-heading">Ready to try it?</h2>
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
