import Link from 'next/link';

const LETTERS = ['S','h','o','r','t','H','a','n','d'];
const COLORS  = ['#e2725b','#34d399','#f59e0b','#60a5fa','#a78bfa','#e2725b','#34d399','#f59e0b','#60a5fa'];

export default function AnimatedLogo() {
  return (
    <Link href="/" className="nav-logo" style={{ display: 'flex', letterSpacing: '0.02em', fontFamily: "var(--font-fredoka, sans-serif)", fontWeight: 700 }}>
      {LETTERS.map((letter, i) => (
        <span
          key={i}
          style={{
            color: COLORS[i],
            display: 'inline-block',
            animation: `logo-bounce 1.2s ease-in-out ${i * 0.1}s infinite`,
          }}
        >
          {letter}
        </span>
      ))}
    </Link>
  );
}
