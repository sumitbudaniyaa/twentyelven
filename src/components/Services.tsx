import { motion } from 'framer-motion';
import { fadeUp, inView } from '../lib/anim.js';
import Hero from '@/components/ui/demo';

/**
 * The services offered alongside the product family.
 * Rendered on the home page between the portfolio and the footer.
 */
export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8 sm:pb-40">
      <motion.div
        variants={fadeUp}
        {...inView}
        className="w-full"
      >
        <Hero backgroundImage="/light-river-meadow.jpg" />
      </motion.div>
    </section>
  );
}

