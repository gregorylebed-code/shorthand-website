import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://getshorthandapp.com'),
  title: 'ShortHand — K-12 Teacher Productivity App for Classroom Management',
  description: 'ShortHand is an education technology platform for K-12 teachers. Classroom management, student progress tracking, behavior documentation, and AI-generated reports — built by a teacher, for teachers.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    siteName: 'ShortHand',
    title: 'ShortHand — K-12 Teacher Productivity App',
    description: 'Tap a student. Type a note. Done in 5 seconds. Classroom management, behavior tracking, AI reports, and parent communication — built by a teacher, for teachers.',
    url: 'https://getshorthandapp.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShortHand — Built by a teacher, for teachers.' }],
  },
  twitter: {
    card: 'summary',
    title: 'ShortHand — K-12 Teacher Productivity App',
    description: 'Tap a student. Type a note. Done in 5 seconds. Built by a teacher, for teachers.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://getshorthandapp.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y954JF2V55"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y954JF2V55');
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@300;400;500&family=Fredoka:wght@600;700&display=swap" rel="stylesheet" />
        {/* JSON-LD Schema — SoftwareApplication */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ShortHand",
          "url": "https://getshorthandapp.com",
          "applicationCategory": "EducationApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "description": "ShortHand is a behavior tracking app that helps K-12 teachers generate AI progress reports, manage classroom data, and send parent communication in seconds.",
          "creator": {
            "@type": "Person",
            "name": "Greg",
            "jobTitle": "3rd Grade Teacher"
          },
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "teacher"
          }
        })}} />
        {/* JSON-LD Schema — FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is ShortHand?", "acceptedAnswer": { "@type": "Answer", "text": "ShortHand is a behavior tracking app built for K-12 teachers. It lets you log student notes in under 5 seconds using voice or text, track behavior patterns over time, generate AI-written progress reports, and send parent messages instantly." } },
            { "@type": "Question", "name": "Do I need to download anything?", "acceptedAnswer": { "@type": "Answer", "text": "No. ShortHand is a Progressive Web App (PWA) — it works in your browser on any device. You can add it to your home screen for a native app feel, but there's nothing to download from an app store." } },
            { "@type": "Question", "name": "How does ShortHand help with parent communication?", "acceptedAnswer": { "@type": "Answer", "text": "After you log a behavior note, ShortHand's AI drafts a parent-ready message in seconds. You review it, make any tweaks, and send — no staring at a blank email. It also keeps a full communication log for IEP meetings." } },
            { "@type": "Question", "name": "Can ShortHand help me spot behavior patterns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ShortHand tracks behavior over 4 to 52 weeks and shows visual trend charts for each student. Smart badges highlight who's improving and who needs attention — so you're not relying on memory." } },
            { "@type": "Question", "name": "Does ShortHand alert me if I haven't checked in on a student?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Color-coded status rings glow red when a student hasn't been logged in 8 or more days, amber at 5–7 days, and green if you've logged recently. No student quietly slips through the cracks." } },
            { "@type": "Question", "name": "Is ShortHand free to use?", "acceptedAnswer": { "@type": "Answer", "text": "ShortHand is currently in beta and free to join. Sign up to get access and be notified when new features are ready." } },
          ]
        })}} />
        {/* Metricool */}
        <script dangerouslySetInnerHTML={{ __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"70e9d586aaa068ee70b5eb8c25ffa853"})});` }} />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
