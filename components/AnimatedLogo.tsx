'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LETTERS = ['S','h','o','r','t','H','a','n','d'];
const COLORS  = ['#e2725b','#34d399','#f59e0b','#60a5fa','#a78bfa','#e2725b','#34d399','#f59e0b','#60a5fa'];

export default function AnimatedLogo() {
  return (
    <Link href="/" className="nav-logo" style={{ display: 'flex', letterSpacing: '0.02em', fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
      {LETTERS.map((letter, i) => (
        <motion.span
          key={i}
          style={{ color: COLORS[i], display: 'inline-block' }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </Link>
  );
}
