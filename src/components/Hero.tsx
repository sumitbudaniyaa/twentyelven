import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Logo } from './Logo.js';
import { Products } from './Products.js';

const TAGLINE = 'Building the next generation of software products.';

/** The full-bleed painting + a dark overlay for text legibility. */
function HeroImage() {
  return (
    <>
      <img
        src="/hero.png"
        alt="TwentyEleven — a calm mountain landscape representing the long road of product building."
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
    </>
  );
}

/** Wordmark, eyebrow, tagline, subline and a scroll cue, laid over the image. */
function HeroContent() {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
      <Logo tone="light" className="absolute left-6 top-6 text-2xl sm:left-10 sm:top-9 sm:text-3xl" />
      <h1 className="font-display mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
        {TAGLINE}
      </h1>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  // Spring-smooth the raw scroll so the animation glides instead of tracking jitter 1:1.
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });

  // ── Phase 1 (0 → 0.45): Image shrinks toward center & rounds corners ──
  const scale = useTransform(p, [0, 0.45, 1], [1, 0.72, 0.72]);
  const radius = useTransform(p, [0, 0.35], [0, 32]);

  // ── Phase 2 (0.4 → 1): Shrunken image slides upward & fades out ──
  const imgY = useTransform(p, [0, 0.4, 1], ['0%', '0%', '-40%']);
  const imgOpacity = useTransform(p, [0.65, 0.95], [1, 0]);

  // ── Hero text: fades out quickly so it doesn't linger during the shrink ──
  const contentOpacity = useTransform(p, [0, 0.2], [1, 0]);
  const contentY = useTransform(p, [0, 0.3], [0, -30]);

  // ── Products: only reveal once the hero image is nearly gone ──
  const prodOpacity = useTransform(p, [0.65, 0.85], [0, 1]);
  const prodY = useTransform(p, [0.6, 0.85], [80, 0]);
  const prodScale = useTransform(p, [0.6, 0.85], [0.97, 1]);

  // Reduced motion: a calm static stack instead of the scroll-driven scene.
  if (reduce) {
    return (
      <>
        <section className="relative h-[100svh] w-full overflow-hidden">
          <HeroImage />
          <HeroContent />
        </section>
        <section className="bg-grid py-24 sm:py-32">
          <Products />
        </section>
      </>
    );
  }

  return (
    // Tall track: how much scroll is "spent" on the pinned animation before the page continues.
    <section ref={trackRef} className="relative h-[350vh]">
      <div className="bg-grid sticky top-0 h-[100svh] overflow-hidden">
        {/* Products reveal — behind the image, rising into view as it recedes & slides up. */}
        <motion.div
          style={{ opacity: prodOpacity, y: prodY, scale: prodScale }}
          className="absolute inset-0 flex items-center justify-center will-change-transform"
        >
          <Products />
        </motion.div>

        {/* Hero image + content — floats above, shrinks then slides up on scroll. */}
        <motion.div
          style={{ scale, y: imgY, borderRadius: radius, opacity: imgOpacity }}
          className="shadow-float pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
        >
          <HeroImage />
          <motion.div style={{ opacity: contentOpacity, y: contentY }} className="h-full">
            <HeroContent />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
