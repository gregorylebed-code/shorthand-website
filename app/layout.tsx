import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShortHand — Built by a Teacher, for Teachers',
  description: 'Quick notes, AI-written reports, and parent emails — all in seconds. The fastest way to know your students.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=Inter:wght@300;400;500&family=Fredoka:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
