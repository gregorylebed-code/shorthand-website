'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '../components/AnimatedLogo';

const SplineHero = dynamic(() => import('../components/SplineHero'), { ssr: false });
const GlobeCanvas = dynamic(() => import('../components/GlobeCanvas'), { ssr: false });

const videos = [
  { id: 'vxgDMU3qpn4', title: 'Install on iPhone' },
  { id: 'cJ-PlHk0diw', title: 'Install on Android' },
  { id: 'p8xubsh52SM', title: 'Welcome — Part 1' },
  { id: 'IEG8K4ivUjw', title: 'Welcome — Part 2' },
  { id: 'Znn8IT0o6kM', title: 'Welcome — Part 3' },
  { id: 'x0OfxlJ4p8E', title: 'Welcome — Part 4' },
  { id: 'aA0yu7wpbVM', title: 'Welcome — Part 5' },
  { id: 'sZYdBJ13GOw', title: 'Welcome — Part 6' },
];

const features = [
  { slug: 'quick-note',        icon: '✏️', title: 'Quick Note',         desc: 'Tap a student, type a note, done in 5 seconds. No menus, no friction — just fast.' },
  { slug: 'ai-reports',        icon: '📄', title: 'AI Reports',          desc: 'Turn weeks of notes into polished, professional behavior reports in one tap.' },
  { slug: 'parent-emails',     icon: '✉️', title: 'Parent Emails',       desc: 'Draft a clear, empathetic parent email from your notes — reviewed and sent by you.' },
  { slug: 'mood-checkins',     icon: '✨', title: 'Refine with AI',      desc: "Don't love the first draft? Ask AI to rewrite it — adjust the tone, length, or focus until it sounds right." },
  { slug: 'behavior-tracking', icon: '🏫', title: 'Class Notes',          desc: 'Log a note for the whole class — how the energy felt, how a lesson landed, what to remember next time.' },
  { slug: 'class-insights',    icon: '🧠', title: 'Class Insights',        desc: 'Get an AI summary of how your class has been — then let it suggest and provide SEL mini-lessons tailored to what they need.' },
];

const btnTap   = { scale: 0.96 };
const btnHover = { scale: 1.04, y: -2 };

export default function Home() {
  const featuresRef   = useRef<HTMLDivElement>(null);
  const videosRef     = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const creatorRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function initGSAP() {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Feature cards — staggered slide-up
        if (featuresRef.current) {
          const cards = featuresRef.current.querySelectorAll<HTMLElement>('.feature-card');
          gsap.fromTo(cards,
            { opacity: 0, y: 48, scale: 0.96 },
            {
              opacity: 1, y: 0, scale: 1,
              duration: 0.65, ease: 'power3.out',
              stagger: 0.1,
              scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' },
            }
          );
          const header = featuresRef.current.querySelector<HTMLElement>('.features-header');
          if (header) {
            gsap.fromTo(header,
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: header, start: 'top 85%' } }
            );
          }
        }

        // Videos — staggered fade in
        if (videosRef.current) {
          const cards = videosRef.current.querySelectorAll<HTMLElement>('.video-card');
          gsap.fromTo(cards,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.55, ease: 'power3.out',
              stagger: 0.08,
              scrollTrigger: { trigger: videosRef.current, start: 'top 82%' },
            }
          );
        }

        // Stats — scale up from slightly small
        if (statsRef.current) {
          const items = statsRef.current.querySelectorAll<HTMLElement>('.stat-item');
          gsap.fromTo(items,
            { opacity: 0, scale: 0.92, y: 24 },
            {
              opacity: 1, scale: 1, y: 0,
              duration: 0.6, ease: 'back.out(1.5)',
              stagger: 0.12,
              scrollTrigger: { trigger: statsRef.current, start: 'top 82%' },
            }
          );
        }

        // Testimonial — fade + slight scale
        if (testimonialRef.current) {
          gsap.fromTo(testimonialRef.current,
            { opacity: 0, scale: 0.97, y: 28 },
            { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'power3.out',
              scrollTrigger: { trigger: testimonialRef.current, start: 'top 82%' } }
          );
        }

        // Creator — fade + slide up
        if (creatorRef.current) {
          gsap.fromTo(creatorRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: creatorRef.current, start: 'top 82%' } }
          );
        }

        // CTA — slide up
        if (ctaRef.current) {
          gsap.fromTo(ctaRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' } }
          );
        }
      });
    }

    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      <div className="glow-field" aria-hidden>
        <span className="g1" /><span className="g2" /><span className="g3" />
        <span className="g4" /><span className="g5" />
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <AnimatedLogo />
            <span className="nav-badge">Built by a Teacher</span>
          </div>
          <a href="#getting-started" className="nav-link">Getting Started</a>
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-canvas"><SplineHero /></div>
        <div className="hero-content">
          <div className="hero-eyebrow">No App Store &nbsp;·&nbsp; Works on Any Device</div>
          <h1>The fastest way<br />to <em>know</em> your students</h1>
          <p className="hero-sub">
            Quick notes, AI-written reports, and parent emails — all in seconds.
            Built by a 3rd-grade teacher who gets it.
          </p>
          <div className="hero-ctas">
            <motion.a
              href="/install"
              className="btn-primary"
              whileHover={btnHover}
              whileTap={btnTap}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Get ShortHand →
            </motion.a>
            <motion.a
              href="#features"
              className="btn-ghost"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={btnTap}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              See How It Works
            </motion.a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div className="section-inner" ref={featuresRef}>
          <div className="features-header">
            <div className="section-label">What it does</div>
            <h2 className="section-heading">Every tool you need.<br /><em>Nothing you don&apos;t.</em></h2>
            <p className="section-sub">Six focused features that save real time in real classrooms.</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <motion.div key={f.slug} whileHover={{ y: -6, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                <Link href={`/features/${f.slug}`} className="feature-card">
                  <div className="card-icon">{f.icon}</div>
                  <div className="card-title">{f.title}</div>
                  <p className="card-desc">{f.desc}</p>
                  <span className="card-link">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED VIDEOS */}
      <section id="getting-started" className="videos-section">
        <div className="section-inner">
          <div className="videos-header">
            <div className="section-label">Getting Started</div>
            <h2 className="section-heading">Watch How It Works</h2>
            <p className="section-sub">Short videos to get you up and running in minutes.</p>
          </div>
          <div className="videos-grid" ref={videosRef}>
            {videos.map((v) => (
              <div key={v.id} className="video-card">
                <div className="video-frame-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
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
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="stats-inner" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number"><span>&lt; 5</span> sec</div>
              <div className="stat-label">to log a note</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Any <span>device</span></div>
              <div className="stat-label">phone, tablet, or computer</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><span>Zero</span> install</div>
              <div className="stat-label">no app store required</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="section-inner">
          <div ref={testimonialRef}>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;I used to spend Sunday nights writing behavior reports.
                Now it takes 10 minutes.&rdquo;
              </p>
              <div className="testimonial-author">
                <span className="status-dot" />
                — A 3rd grade teacher
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR */}
      <section className="creator-section">
        <div className="section-inner">
          <div ref={creatorRef} className="creator-card">
            <div className="creator-eyebrow">BUILT BY A TEACHER. FOR TEACHERS.</div>
            <h2 className="creator-heading">A Message from the Creator</h2>
            <p className="creator-body">
              I have spent over 20 years in the classroom. Before I became a 3rd grade teacher,
              I worked as a one-to-one aide and a Registered Behavior Technician. I know exactly
              how loud, fast, and overwhelming a school day can be. I also know that high-quality,
              data-backed insights are the only way to truly understand what a student needs.
            </p>
            <p className="creator-body">
              I didn&apos;t build this app to give you more work. I built it because I was tired of
              drowning in paperwork while trying to keep my head above water. This tool was created
              with love to assist my fellow teachers who are looking for a better way to track
              progress and bridge the gap between school and home.
            </p>
            <blockquote className="creator-quote">
              &ldquo;Good data shouldn&apos;t be a chore. It should be the bridge that connects a
              teacher&apos;s observation to a parent&apos;s understanding.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* WHY MY PERSPECTIVE */}
      <section className="perspective-section">
        <div className="section-inner">
          <h2 className="perspective-heading">Why My Perspective Matters</h2>
          <div className="perspective-grid">
            <div className="perspective-card perspective-card--accent">
              <div className="perspective-icon">📅</div>
              <div className="perspective-title">20+ Years of Experience</div>
              <p className="perspective-desc">I&apos;ve seen every classroom trend and every type of paperwork. This app is the solution to problems that actually exist in a real school.</p>
            </div>
            <div className="perspective-card">
              <div className="perspective-icon">🧠</div>
              <div className="perspective-title">RBT &amp; Aide Background</div>
              <p className="perspective-desc">My experience in behavior intervention means this app captures the nuances of student behavior that standard gradebooks often miss.</p>
            </div>
            <div className="perspective-card">
              <div className="perspective-icon">⏱️</div>
              <div className="perspective-title">Classroom Reality</div>
              <p className="perspective-desc">I know you don&apos;t have ten minutes to log a note. That&apos;s why every feature in this app is built to be finished in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="privacy-section">
        <div className="section-inner">
          <div className="section-label">Data & Privacy</div>
          <h2 className="section-heading">Our Privacy Promise<br /><em>(Teacher-to-Teacher)</em></h2>
          <p className="section-sub">You're trusting me with notes about real kids. Here's exactly how I protect that.</p>
          <div className="privacy-grid">
            {[
              { icon: '🔒', title: 'Bank-Level Encryption', desc: 'Every note you shorthand is encrypted using SSL/TLS — the same tech banks use. If anyone tried to intercept it, it would just look like gibberish.' },
              { icon: '🚫', title: 'No Data Selling. Ever.', desc: "I'm a teacher, not a data broker. Your notes and student information are never sold, shared, or used for advertising. Period." },
              { icon: '👤', title: 'The "First Name" Rule', desc: "The app doesn't require full legal names or student IDs. You can use initials or nicknames to keep your records even more private." },
              { icon: '🗑️', title: 'You Own the Data', desc: "If you decide to stop using ShortHand, you can delete your account and every single note instantly. We don't keep a copy." },
              { icon: '🤖', title: 'AI with Boundaries', desc: 'The AI only sees your notes when you ask it to write a report. It doesn\'t watch you while you work.' },
            ].map((item) => (
              <div key={item.title} className="privacy-card">
                <div className="privacy-icon">{item.icon}</div>
                <div className="privacy-title">{item.title}</div>
                <p className="privacy-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <div ref={ctaRef} className="cta-layout">
            <div className="cta-text">
              <div className="section-label">Get started</div>
              <h2 className="cta-heading">Free to download.<br />No sign-up required.</h2>
              <p className="cta-sub">
                ShortHand is completely free. Install it on any device and start using it in minutes.
              </p>
              <div className="cta-btns">
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
            </div>
            <div className="cta-globe">
              <GlobeCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">ShortHand</div>
        <div className="footer-tagline">Built by a teacher, for teachers.</div>
        <a href="mailto:hello@getshorthand.app" className="footer-email">hello@getshorthand.app</a>
        <div className="footer-copy">© 2026 ShortHand. All rights reserved. · <a href="/privacy" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a></div>
      </footer>
    </>
  );
}
