import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ShortHand',
  description: 'How ShortHand collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="glow-field" aria-hidden>
        <span className="g1" /><span className="g2" /><span className="g3" />
        <span className="g4" /><span className="g5" />
      </div>

      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <Link href="/" className="logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>ShortHand</span>
            </Link>
          </div>
          <Link href="/install" className="btn-primary">Try Free</Link>
        </div>
      </nav>

      <Link href="/" className="detail-back">← Back to home</Link>

      <div className="detail-hero">
        <span className="detail-icon">🔒</span>
        <h1 className="detail-title">Privacy <em>Policy</em></h1>
        <p className="detail-desc">
          ShortHand is built by a teacher who understands how sensitive student data is.
          This policy explains exactly what we collect, why, and how we protect it.
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Last updated: March 2026
        </p>
      </div>

      <div className="section-inner" style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem 5rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          <div className="privacy-card">
            <div className="privacy-icon">👤</div>
            <div className="privacy-title">Who This Applies To</div>
            <div className="privacy-desc">
              ShortHand is a classroom management tool for teachers. When you create an account,
              you are the user. Student data you enter — names, notes, mood check-ins — is entered
              by you, the teacher, and is stored under your account only.
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">📋</div>
            <div className="privacy-title">What We Collect</div>
            <div className="privacy-desc">
              <strong style={{ color: 'var(--text)' }}>Your account:</strong> Your email address and password (managed securely by Supabase Auth).<br /><br />
              <strong style={{ color: 'var(--text)' }}>Student data you enter:</strong> Student names, class periods, behavioral notes, mood check-ins, birthday info, parent contact details, and photo URLs — all entered or imported by you.<br /><br />
              <strong style={{ color: 'var(--text)' }}>Google Classroom (optional):</strong> If you connect Google Classroom, we access your course list and student names, emails, and profile photos to help you import your roster. We store a token to keep you connected. You can disconnect at any time.<br /><br />
              <strong style={{ color: 'var(--text)' }}>AI features:</strong> When you use AI-generated reports or summaries, the relevant notes are sent to our AI provider (Groq) to generate the response. No student data is stored or used for training by our AI providers.
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">🚫</div>
            <div className="privacy-title">What We Don't Do</div>
            <div className="privacy-desc">
              We do not sell your data or student data to anyone — ever.<br /><br />
              We do not use student data for advertising.<br /><br />
              We do not share your data with third parties except the services required to run the app
              (Supabase for database and auth, Groq for AI features, Vercel for hosting, Upstash for rate limiting).<br /><br />
              We do not allow anyone other than you to access your students' information.
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">🔐</div>
            <div className="privacy-title">How We Protect Your Data</div>
            <div className="privacy-desc">
              All data is stored in a Supabase database with Row Level Security (RLS) enabled —
              meaning every query is scoped to your account only. No teacher can see another teacher's data.<br /><br />
              All communication between the app and our servers uses HTTPS encryption.<br /><br />
              API endpoints require authentication — your session token is verified on every request.
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">🗑️</div>
            <div className="privacy-title">Your Rights</div>
            <div className="privacy-desc">
              You can delete your data at any time from within the app (Settings → Factory Wipe).<br /><br />
              You can disconnect Google Classroom at any time, which removes your stored Google tokens.<br /><br />
              To request full account deletion or a copy of your data, email us at{' '}
              <a href="mailto:hello@getshorthand.app" style={{ color: 'var(--accent)' }}>hello@getshorthand.app</a>.
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">🌐</div>
            <div className="privacy-title">Third-Party Services</div>
            <div className="privacy-desc">
              ShortHand uses the following third-party services to operate:<br /><br />
              <strong style={{ color: 'var(--text)' }}>Supabase</strong> — database and authentication (<a href="https://supabase.com/privacy" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">privacy policy</a>)<br />
              <strong style={{ color: 'var(--text)' }}>Groq</strong> — AI language model processing (<a href="https://groq.com/privacy-policy/" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">privacy policy</a>)<br />
              <strong style={{ color: 'var(--text)' }}>Vercel</strong> — hosting and deployment (<a href="https://vercel.com/legal/privacy-policy" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">privacy policy</a>)<br />
              <strong style={{ color: 'var(--text)' }}>Google</strong> — Google Classroom integration, optional (<a href="https://policies.google.com/privacy" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">privacy policy</a>)
            </div>
          </div>

          <div className="privacy-card">
            <div className="privacy-icon">✉️</div>
            <div className="privacy-title">Contact</div>
            <div className="privacy-desc">
              Questions about this policy or your data? Reach out anytime:<br /><br />
              <a href="mailto:hello@getshorthand.app" style={{ color: 'var(--accent)' }}>hello@getshorthand.app</a><br /><br />
              We're a small team and we'll respond personally.
            </div>
          </div>

        </div>
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
